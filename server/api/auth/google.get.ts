export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user: oauthUser, tokens }) {
    const { user: userSession } = await getUserSession(event)

    // If the user is already signed in, link the account
    if (userSession?.id) {
      const user = await findUserById(userSession.id)

      if (user) {
        await updateUser(userSession.id, {
          googleId: oauthUser.sub,
          googleToken: tokens.access_token,
        })

        await updateUserSession(event, {
          ...userSession,
          googleId: oauthUser.sub,
        })
        return sendRedirect(event, '/todos')
      }
    }

    // If the user is not signed in, search for an existing user with that Google ID
    // If it exists, sign in as that user and refresh the token
    let user = await findUserByGoogleId(oauthUser.sub)

    if (user) {
      await updateUser(user.id, {
        googleId: oauthUser.sub,
        googleToken: tokens.access_token,
      })

      await updateUserSession(event, {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        verifiedAt: user.verifiedAt,
        githubId: user.githubId,
        googleId: oauthUser.sub,
      })
      return sendRedirect(event, '/todos')
    }

    // If the user is not signed in, search for an existing user with that email address without a Google ID
    // If it exists, tells the user to sign in with that account and link the Google account
    user = await findUserBy(
      and(
        eq(tables.users.email, oauthUser.email),
        isNull(tables.users.googleId),
      ),
    )

    if (user) {
      return sendRedirect(event, '/login?alert=google')
    }

    // If the user is not signed in and no user exists with that GoogleID or email address, create a new user
    const createdUser = await createUser({
      name: (oauthUser.name ?? oauthUser.login) as string,
      email: oauthUser.email as string,
      avatar: oauthUser.picture as string,
      googleId: oauthUser.sub as string,
      googleToken: tokens.access_token as string,
      verifiedAt: new Date().toUTCString(),
    })

    await updateUserSession(event, {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      avatar: createdUser.avatar,
      verifiedAt: createdUser.verifiedAt,
      googleId: oauthUser.sub,
    })

    return sendRedirect(event, '/todos')
  },
})

export default defineNuxtRouteMiddleware(() => {
  const { user, loggedIn } = useUserSession()

  if (!loggedIn.value || !user.value?.verifiedAt) {
    return navigateTo('/profile')
  }
})

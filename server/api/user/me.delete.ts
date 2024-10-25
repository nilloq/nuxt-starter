export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  try {
    await useDB().delete(tables.users).where(eq(tables.users.id, user.id))
  }
  catch (error) {
    if (error instanceof Error) {
      throw createError({ statusCode: 500, message: error.message })
    }
    else {
      throw createError({ statusCode: 500, message: 'Unknown error' })
    }
  }

  return sendNoContent(event, 204)
})

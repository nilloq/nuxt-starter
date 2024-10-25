export default defineEventHandler(async (event) => {
  const posts = await getPosts(event)
  return posts
})

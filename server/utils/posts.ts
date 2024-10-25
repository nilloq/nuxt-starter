import type { H3Event } from 'h3'
import type { PostDto } from './dto/post.dto'
import type { Post } from '~~/types/posts'

export const getPosts = defineCachedFunction(async (_event: H3Event): Promise<Post[]> => {
  const backendUrl = useRuntimeConfig().backendUrl

  const result = await $fetch<PostDto[]>(`${backendUrl}/posts`)

  return result.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }))
},
{
  swr: false,
  maxAge: 1000,
})

export const getPostById = defineCachedFunction(async (id: string, _event: H3Event): Promise<Post | null> => {
  const backendUrl = useRuntimeConfig().backendUrl

  const result = await $fetch<PostDto | null>(`${backendUrl}/posts/${id}`)

  if (!result) {
    return null
  }

  return {
    id: result.id,
    title: result.title,
    body: result.body,
  }
},
{
  swr: false,
  maxAge: 1000,
})

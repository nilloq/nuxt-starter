import type { Post } from '~~/types/posts'

export const usePostStore = defineStore('post', () => {
  const posts = ref<Post[]>()

  const isLoading = ref(false)

  async function loadPosts(): Promise<Post[]> {
    if (posts.value)
      return posts.value
    isLoading.value = true
    const data = await $fetch<Post[]>('/api/posts')
    posts.value = data ?? []
    isLoading.value = false
    return posts.value
  }

  return { isLoading, posts, loadPosts }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot))

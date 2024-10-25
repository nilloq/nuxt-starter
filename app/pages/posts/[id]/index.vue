<script setup lang="ts">
import type { Post } from '~/services/model/post.model'

const route = useRoute()

const postStore = usePostStore()
await useAsyncData ('posts', () => postStore.loadPosts())
const post = computed<Post | undefined>(() => postStore.posts?.find((p: Post) => p.id.toString() === route.params.id))

useHead({
  title: computed(() => `Post ${post.value?.id ?? ''}`),
})
</script>

<template>
  <div v-if="post" class="m-auto p-4 container">
    <h1 class="mb-8">
      {{ post.title }}
    </h1>
    <p> {{ post.body }}</p>
    <button @click="useToast().add({ message: 'bonjour' })">
      Click
    </button>
  </div>
  <!-- Post not found -->
  <div v-else class="m-auto p-4 container">
    NotFound
  </div>
</template>

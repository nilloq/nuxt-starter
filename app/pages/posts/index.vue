<script setup lang="ts">
useHead({
  title: 'Posts',
})

const postStore = usePostStore()
await useAsyncData ('posts', () => postStore.loadPosts())
</script>

<template>
  <div class="m-auto p-4 container">
    <div class="flex">
      <h1 class="mb-4">
        {{ $t('POSTS.TITLE') }}
      </h1>
    </div>

    <!-- List of Sessions -->
    <ul>
      <li
        v-for="(post, index) in postStore.posts"
        :key="index"
        class="border-b border-grey"
      >
        <NuxtLink
          :to="`/posts/${post.id}`"
          class="focus-visible:inside-focus w-full flex items-center p-2 @hover:bg-lightgrey dark:@hover:bg-darkgrey"
        >
          <span class="inline-block min-w-16 border-rd-2 bg-primary px-2 py-1 text-center dark:text-black">{{ `Id: ${post.id}` }}</span>
          <span class="ml-4 inline-block truncate-1">{{ post.title }}</span>
          <span v-if="$viewport.isGreaterOrEquals('tablet')">{{ post.id }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

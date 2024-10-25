<script setup lang="ts">
const { loggedIn } = useUserSession()
const toast = useToast()
</script>

<template>
  <div class="m-auto p-8 text-center container">
    <p class="pb-8">
      {{ $t('HOME.WELCOME') }}
    </p>
    <!-- Public page -->
    <NuxtLink to="/posts" class="btn">
      {{ $t('HOME.LINKS.ARTICLES') }}
    </NuxtLink>
    <!-- Page that requires authentication -->
    <NuxtLink to="/todos" class="ml-8 btn">
      {{ $t('HOME.LINKS.TODOS') }}<span class="ml-2" :class="loggedIn ? 'i-carbon-unlocked' : 'i-carbon-locked'" />
    </NuxtLink>
    <button class="btn ml-8" @click="toast.error('We\'ve just released Radix 3.0!')" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { t } = useI18n()

useHead({
  title: () => t('PROFILE.TITLE'),
})
</script>

<template>
  <div class="m-auto p-4 container">
    <h1 class="mb-8">
      {{ $t('PROFILE.TITLE') }}
    </h1>
    <div class="max-w-4xl">
      <ProfileInformation class="mb-12" />
      <ProfileAuthentication class="mb-12" />
      <ProfileDeletion />
    </div>
  </div>
</template>

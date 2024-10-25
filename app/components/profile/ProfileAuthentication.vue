<script setup lang="ts">
const { user } = useUserSession()

const isGoogleConnected = computed(() => Boolean(user.value?.googleId))
const isGithubConnected = computed(() => Boolean(user.value?.githubId))
</script>

<template>
  <div>
    <h2>{{ $t('PROFILE.AUTHENTICATION.TITLE') }}</h2>
    <p class="mb-2">
      {{ $t('PROFILE.AUTHENTICATION.DESCRIPTION') }}
    </p>
    <div class="grid-layout border-base p-4">
      <p class="col-span-full">
        {{ $t('PROFILE.AUTHENTICATION.EXPLANATION') }}
      </p>
      <!-- With Google -->
      <div class="col-span-4">
        <button class="btn-secondary w-full">
          <span class="i-carbon-logo-google mr-1" />
          {{ isGoogleConnected ? $t('PROFILE.AUTHENTICATION.GOOGLE.REMOVE') : $t('PROFILE.AUTHENTICATION.GOOGLE.CONNECT') }}
        </button>
      </div>
      <!-- With Github -->
      <div class="col-span-4">
        <button class="btn-secondary w-full">
          <span class="i-carbon-logo-github mr-1" />
          {{ isGithubConnected ? $t('PROFILE.AUTHENTICATION.GITHUB.REMOVE') : $t('PROFILE.AUTHENTICATION.GITHUB.CONNECT') }}
        </button>
      </div>
    </div>
  </div>
</template>

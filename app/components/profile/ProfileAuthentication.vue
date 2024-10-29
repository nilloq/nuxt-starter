<script setup lang="ts">
import { FetchError } from 'ofetch'

const { user, fetch: fetchUserSession } = useUserSession()
const { t } = useI18n()
const toast = useToast()

const isGoogleConnected = computed(() => Boolean(user.value?.googleId))
const isGithubConnected = computed(() => Boolean(user.value?.githubId))

async function connect(providerName: 'github' | 'google') {
  window.open(`/api/auth/${providerName}`, '_self')
}

async function disconnect(providerName: 'github' | 'google') {
  try {
    await $fetch(`/api/user/providers/${providerName}`, {
      method: 'DELETE',
    })

    await fetchUserSession()

    toast.success(t('PROFILE.PROVIDERS.REMOVE', { provider: providerName }))
  }
  catch (error) {
    if (error instanceof FetchError && error.data.statusCode === 400) {
      toast.error(t('PROFILE.PROVIDERS.LAST_PROVIDER'))
    }
    else {
      toast.error(t('GENERAL.ERROR.UNKNWON'))
    }
  }
}
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
        <button
          class="btn-secondary w-full"
          @click="isGoogleConnected ? disconnect('google') : connect('google')"
        >
          <span class="i-carbon-logo-google mr-1" />
          {{ isGoogleConnected ? $t('PROFILE.AUTHENTICATION.GOOGLE.REMOVE') : $t('PROFILE.AUTHENTICATION.GOOGLE.CONNECT') }}
        </button>
      </div>
      <!-- With Github -->
      <div class="col-span-4">
        <button
          class="btn-secondary w-full"
          @click="isGithubConnected ? disconnect('github') : connect('github')"
        >
          <span class="i-carbon-logo-github mr-1" />
          {{ isGithubConnected ? $t('PROFILE.AUTHENTICATION.GITHUB.REMOVE') : $t('PROFILE.AUTHENTICATION.GITHUB.CONNECT') }}
        </button>
      </div>
    </div>
  </div>
</template>

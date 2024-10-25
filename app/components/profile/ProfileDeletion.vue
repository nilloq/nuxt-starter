<script setup lang="ts">
const { t } = useI18n()
const open = ref(false)
const isLoading = ref(false)

const { session } = useUserSession()
const toast = useToast()

async function deleteAccount() {
  isLoading.value = true

  try {
    await $fetch('/api/user/me', { method: 'DELETE' })
    await $fetch('/api/_auth/session', { method: 'DELETE' })
    session.value = {}

    toast.add({ message: t('PROFILE.DELETE.SUCCESS') })
    await navigateTo('/')
  }
  catch {
    toast.add({ message: t('PROFILE.DELETE.ERROR') })
  }
  finally {
    open.value = false
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <h2>{{ $t('PROFILE.DELETE.TITLE') }}</h2>
    <p class="mb-2">
      {{ $t('PROFILE.DELETE.DESCRIPTION') }}
    </p>
    <div class="grid-layout border-base p-4">
      <p class="col-span-full">
        {{ $t('PROFILE.DELETE.WARNING') }}
      </p>
      <!-- delete button -->
      <div class="col-span-full">
        <div class="h-full flex justify-end items-end">
          <button class="btn-danger btn-small" @click="open = true">
            {{ $t('PROFILE.DELETE.BUTTON') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Deletion confirmation modal -->
    <AppModal v-model:open="open">
      <template #title>
        {{ $t('PROFILE.DELETE.CONFIRM.TITLE') }}
      </template>
      <template #description>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p>{{ $t('PROFILE.DELETE.CONFIRM.DESCRIPTION') }}</p>
      </template>
      <template #confirm>
        <button
          type="button"
          class="btn-danger icon-left"
          :class="{ 'btn--loading': isLoading }"
          :disabled="isLoading"
          @click="deleteAccount"
        >
          {{ $t('GENERAL.DELETE') }}
        </button>
      </template>
    </AppModal>
  </div>
</template>

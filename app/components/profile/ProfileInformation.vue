<script setup lang="ts">
const { user } = useUserSession()

const state = reactive({
  email: user.value?.email,
  name: user.value?.name,
})
</script>

<template>
  <div>
    <h2>{{ $t('PROFILE.INFORMATION.TITLE') }}</h2>
    <p class="mb-2">
      {{ $t('PROFILE.INFORMATION.DESCRIPTION') }}
    </p>
    <div class="grid-layout border-base p-4">
      <!-- avatar -->
      <div class="col-span-4 md:col-span-2">
        <div class="flex flex-col items-center gap-4">
          <AppAvatar :src="user?.avatar" :alt="state.name" :size="96" />
          <!-- <button class="btn-secondary btn-small">
            Remove
          </button> -->
        </div>
      </div>
      <!-- name and email -->
      <div class="col-span-4 md:col-span-6">
        <label for="name" class="fw-bold">{{ $t('GENERAL.NAME') }}</label>
        <input
          id="name"
          v-model="state.name"
          type="text"
          class="mb2"
          disabled
        >
        <label for="email" class="fw-bold">{{ $t('GENERAL.EMAIL') }}</label>
        <input
          id="email"
          v-model="state.email"
          type="email"
          disabled
        >
      </div>
      <!-- save button -->
      <!-- <div class="col-span-4">
        <div class="h-full flex justify-end items-end">
          <button class="btn btn-small">
            {{ $t('GENERAL.SAVE') }}
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

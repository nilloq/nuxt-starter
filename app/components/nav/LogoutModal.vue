<script setup lang="ts">
const { clear } = useUserSession()

function logout() {
  clear()
  navigateTo('/')
}

const open = defineModel({ default: false, type: Boolean })
</script>

<template>
  <AppModal v-model:open="open" @confirm="logout">
    <template #title>
      {{ $t('LOGOUT.TITLE') }}
    </template>
    <template #description>
      {{ $t('LOGOUT.DESCRIPTION') }}
    </template>
  </AppModal>
</template>

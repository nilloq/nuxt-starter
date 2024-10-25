<script lang="ts" setup>
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    type="button"
    :aria-label="colorMode.preference === 'light' ? $t('GENERAL.THEME.DARK.ARIA') : $t('GENERAL.THEME.LIGHT.ARIA')"
    class="btn-icon"
    @click="toggleMode"
  >
    <div class="i-carbon-sun dark:i-carbon-moon text-2xl" />
  </button>
</template>

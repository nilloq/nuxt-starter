<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(lc => lc.code !== locale.value)
})
</script>

<template>
  <div>
    <button
      v-for="lc in availableLocales"
      :key="lc.code"
      type="button"
      class="btn-icon"
      :aria-label="$t('HEADER.LANG.ARIA')"
      @click="setLocale(lc.code)"
    >
      {{ $t(`HEADER.LANG.${lc.code.toUpperCase()}`) }}
    </button>
  </div>
</template>

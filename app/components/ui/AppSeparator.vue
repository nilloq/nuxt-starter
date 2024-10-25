<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="flex items-center">
    <Separator class="w-full bg-lightgrey data-[orientation=horizontal]:h-px dark:bg-grey" />
    <p v-if="label" class="text-sm px-2 text-lightgrey dark:text-grey">
      {{ label }}
    </p>
    <Separator class="w-full bg-lightgrey data-[orientation=horizontal]:h-px dark:bg-grey" />
  </div>
</template>

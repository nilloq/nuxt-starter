<script setup lang="ts">
const { src, alt = '', size = 32 } = defineProps<{
  src?: string | null
  alt?: string
  size?: number
}>()

const avatarStyle = computed(() => ({
  'height': `${size}px`,
  'width': `${size}px`,
  'min-width': `${size}px`,
}))

const fallbackStyle = computed(() => ({
  'font-size': `${size / 2}px`,
}))
</script>

<template>
  <AvatarRoot
    class="inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle"
    :style="avatarStyle"
  >
    <AvatarImage
      :src="src ?? ''"
      class="h-full w-full rounded-[inherit] object-cover"
      :alt="alt ?? ''"
    />
    <AvatarFallback
      :delay-ms="600"
      class="h-full w-full flex items-center justify-center bg-primary text-white font-medium leading-1"
      :style="fallbackStyle"
    >
      {{ alt[0]?.toUpperCase() }}
    </AvatarFallback>
  </AvatarRoot>
</template>

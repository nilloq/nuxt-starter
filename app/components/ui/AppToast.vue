<script setup lang="ts">
import type { Toast } from '~~/types/toast'

const toast = useToast()
const toasts = useState<Toast[]>('toasts', () => [])

const toastIcon = computed(() => {
  return {
    success: 'i-carbon-checkmark-filled',
    error: 'i-carbon-close-filled',
    warning: 'i-carbon-warning-filled',
    info: 'i-carbon-information-filled',
  }
})

const toastIconColor = computed(() => {
  return {
    success: 'text-success',
    error: 'text-danger',
    warning: 'text-warning',
    info: 'text-neutral',
  }
})
</script>

<template>
  <ToastProvider>
    <ToastRoot
      v-for="(t) in toasts"
      :key="t.id"
      :duration="t.duration"
      class="flex items-center justify-between justify-between w-full border-rd-1 mt-2 py-1 pl-4 pr-2 text-white shadow bg-inverse dark:text-black"
      @update:open="toast.remove(t.id)"
    >
      <div>
        <ToastTitle class="fw-bold">
          {{ t.title }}
        </ToastTitle>
        <ToastDescription as-child class="text-sm flex items-center">
          <p class="text-sm flex items-center">
            <span class="inline-block mr-2" :class="[toastIcon[t.type], toastIconColor[t.type]]" />{{ t.message }}
          </p>
        </ToastDescription>
      </div>
      <ToastAction as-child :alt-text="$t('GENERAL.CLOSE')">
        <button
          type="button"
          class="btn-icon btn-icon-inverse"
          :aria-label="$t('GENERAL.CLOSE')"
        >
          <span class="i-mdi-close" />
        </button>
      </ToastAction>
    </ToastRoot>
    <ToastViewport class="position-fixed right-0 bottom-0 flex flex-col outline-none z-9999 w-30rem max-w-100vw p-4" />
  </ToastProvider>
</template>

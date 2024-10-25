<script setup lang="ts">
defineEmits(['confirm'])
const open = defineModel({ default: false, type: Boolean })
</script>

<template>
  <AlertDialogRoot v-model:open="open">
    <AlertDialogTrigger as-child>
      <slot name="trigger" />
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay class="fixed inset-0 z-30 bg-black bg-op-30 backdrop-blur-2" />
      <AlertDialogContent
        class="fixed left-[50%] top-[50%] z-[100] max-h-[85vh] max-w-[450px] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] dark:bg-darkgrey focus:outline-none"
      >
        <AlertDialogTitle class="text-xl">
          <slot name="title" />
        </AlertDialogTitle>
        <AlertDialogDescription class="my-6">
          <slot name="description" />
        </AlertDialogDescription>
        <div class="flex justify-end">
          <slot name="cancel">
            <AlertDialogCancel as-child>
              <button type="button" class="btn-secondary mr-4">
                {{ $t('GENERAL.CANCEL') }}
              </button>
            </AlertDialogCancel>
          </slot>
          <slot name="confirm">
            <AlertDialogAction as-child @click="$emit('confirm')">
              <button type="button" class="btn">
                {{ $t('GENERAL.CONFIRM') }}
              </button>
            </AlertDialogAction>
          </slot>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>

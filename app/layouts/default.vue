<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <TheHeader />
    <main class="pb-24 pt-16 md:pt-20">
      <slot />
    </main>
    <TheFooter>
      <div class="w-full flex items-center">
        <p class="text-xs fw-bold">
          {{ $t('FOOTER.COPYRIGHT') }}
        </p>
        <div class="flex items-center ms-auto">
          <p class="text-xs mr-1">
            v {{ config.public.webappVersion }}
          </p>
          <NuxtLink
            class="btn-icon"
            title="Github"
            hover="bg-active"
            href="https://github.com/nilloq/nuxt-starter"
            target="_blank"
          >
            <div class="i-carbon-logo-github w-6 h-6" />
          </NuxtLink>
        </div>
      </div>
    </TheFooter>
  </div>
</template>

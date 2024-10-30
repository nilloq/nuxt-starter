import type { ModuleOptions } from '@vite-pwa/nuxt'

const scope = '/'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  scope,
  base: scope,
  manifest: {
    id: scope,
    scope,
    start_url: scope,
    name: 'Nuxt starter template',
    short_name: 'NuxtStarter',
    description: 'A starter template for a Nuxt webapp',
    lang: 'en',
    theme_color: '#abfdd4',
    icons: [
      {
        src: '/android-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/maskable-android-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,txt,png,ico,svg}'],
    navigateFallbackDenylist: [/^\/api\//],
    navigateFallback: '/',
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      // {
      //   urlPattern: /^https:\/\/fonts.googleapis.com\/.*/i,
      //   handler: 'CacheFirst',
      //   options: {
      //     cacheName: 'google-fonts-cache',
      //     expiration: {
      //       maxEntries: 10,
      //       maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
      //     },
      //     cacheableResponse: {
      //       statuses: [0, 200],
      //     },
      //   },
      // },
      // {
      //   urlPattern: /^https:\/\/fonts.gstatic.com\/.*/i,
      //   handler: 'CacheFirst',
      //   options: {
      //     cacheName: 'gstatic-fonts-cache',
      //     expiration: {
      //       maxEntries: 10,
      //       maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
      //     },
      //     cacheableResponse: {
      //       statuses: [0, 200],
      //     },
      //   },
      // },
    ],
  },
  client: {
    installPrompt: true,
    // you don't need to include this: only for testing purposes
    // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    periodicSyncForUpdates: 3600,
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: false,
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: 'module',
  },
}

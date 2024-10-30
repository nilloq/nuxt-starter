// https://nuxt.com/docs/api/configuration/nuxt-config
import { version } from './package.json'
// import { pwa } from './app/config/pwa'

export default defineNuxtConfig({

  modules: [
    '@vueuse/nuxt',
    'radix-vue/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-viewport',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    // '@vite-pwa/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    '@nuxthub/core',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: ['stores', 'services'],
  },

  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: '%s - Nuxt starter',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        // { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
      meta: [
        { name: 'description', content: 'A template to start a new Nuxt project' },
        { name: 'theme-color', content: '#19a7ce' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'robots', content: 'noindex' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
    '~/assets/styles/inputs.css',
    '~/assets/styles/buttons.css',
  ],

  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },

  // Uncomment the following line for SPA
  // ssr: false,

  runtimeConfig: {
    backendUrl: 'https://jsonplaceholder.typicode.com/',
    outputProxy: '',
    public: {
      webappVersion: `${version}-dev`, // Used in the footer, and overrided by the CI/CD in STAGING / PROD(see openshift/os-pre-apply.sh
    },
    DB: 'DB',
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-09-16',

  hub: {
    database: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    langDir: 'lang',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en-GB', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json' },
    ],
    lazy: true,
    vueI18n: './i18n.config.ts',
  },

  // pwa,
})

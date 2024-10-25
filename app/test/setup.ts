import { config } from '@vue/test-utils'
import { afterAll, beforeAll, vi } from 'vitest'
import { ref } from 'vue'
import { createI18n } from 'vue-i18n'

beforeAll(() => {
  vi.mock('vue-i18n', async (importOriginal) => {
    const module = await importOriginal<typeof import('vue-i18n')>()

    return {
      ...module,
      useI18n: () => ({
        locale: ref('en'),
        locales: ref([
          {
            name: 'English',
            code: 'en',
            iso: 'en-GB',
            file: 'en.ts',
          },
        ]),
      }),
    }
  })
})

afterAll(() => {
  vi.restoreAllMocks()
})

// setup i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  locales: [
    {
      name: 'English',
      code: 'en',
      iso: 'en-GB',
      file: 'en.ts',
    },
  ],
  messages: {},
  missing: (locale: string, key: string) => key,
})

config.global.plugins.push(i18n)

import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { config, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useI18n } from 'vue-i18n'
import LanguageSwitch from '~/components/LanguageSwitch.vue'

mockNuxtImport('useI18n', () => vi.fn())

config.global.mocks = {
  $t: (tKey: string) => tKey,
}

describe('languageSwitch.vue', () => {
  let mockSetLocale: ReturnType<typeof vi.fn>
  let mockLocale: { value: string }
  let mockLocales: { value: Array<{ code: string }> }

  beforeEach(() => {
    mockSetLocale = vi.fn()
    mockLocale = { value: 'en' }
    mockLocales = { value: [{ code: 'en' }, { code: 'fr' }, { code: 'es' }] };

    (useI18n as ReturnType<typeof vi.fn>).mockReturnValue({
      locale: mockLocale,
      locales: mockLocales,
      setLocale: mockSetLocale,
    })
  })

  it('renders correctly', () => {
    const wrapper = mount(LanguageSwitch)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct number of displayed languages', () => {
    const wrapper = mount(LanguageSwitch)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2) // 'fr' and 'es' should be rendered
  })

  it('calls setLocale with the correct argument when a button is clicked', async () => {
    const wrapper = mount(LanguageSwitch)
    const buttons = wrapper.findAll('button')

    await buttons[0]?.trigger('click')
    expect(mockSetLocale).toHaveBeenCalledWith('fr')

    await buttons[1]?.trigger('click')
    expect(mockSetLocale).toHaveBeenCalledWith('es')
  })
})

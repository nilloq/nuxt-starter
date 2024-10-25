import { defu } from 'defu'

export function useApiFetch<T>(url: Parameters<typeof $fetch<T>>[0], options: Parameters<typeof $fetch<T>>[1] = {}) {
  const defaults: Parameters<typeof $fetch<T>>[1] = {
    baseURL: '/api/',

    onRequestError(_ctx) {
      useToast().add({ message: useNuxtApp().$i18n.t('GENERAL.ERROR.NETWORK') })
    },

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
      return _ctx.response._data
    },

    onResponseError(_ctx) {
      if (_ctx.response.status !== 401)
        useToast().add({ message: useNuxtApp().$i18n.t('GENERAL.ERROR.UNKNWON') })
    },
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return $fetch(url, params)
}

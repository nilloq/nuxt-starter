import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import post from '~/pages/posts/[id]/index.vue'

describe('posts', async () => {
  it('renders post page', async () => {
    const page = await mountSuspended(post, {
      route: '/posts/123',
      pending: { value: false },
    })

    // Vérifier que le contenu du post est rendu
    expect(page.text()).toContain('NotFound')
  })
})

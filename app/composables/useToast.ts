import type { Toast } from '~~/types/toast'

export function useToast() {
  const toasts = useState<Toast[]>('toasts', () => [])

  function add(toast: Partial<Toast>) {
    toasts.value.push({
      id: crypto.randomUUID(),
      type: 'info',
      autohide: true,
      duration: 6000,
      ...toast,
    } as Toast)
  }

  function remove(id: string) {
    toasts.value = toasts.value.filter((t: Toast) => t.id !== id)
  }

  function success(message: string) {
    add({ type: 'success', message })
  }

  function error(message: string) {
    add({ type: 'error', message })
  }

  function warning(message: string) {
    add({ type: 'warning', message })
  }

  function info(message: string) {
    add({ type: 'info', message })
  }

  return {
    add,
    remove,
    success,
    error,
    warning,
    info,
  }
}

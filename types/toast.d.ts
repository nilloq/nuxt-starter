export type ToastType = 'error' | 'info' | 'warning' | 'success'

export interface Toast {
  id: string
  type: ToastType
  title?: string
  message: string
  autohide?: boolean
  duration?: number
}

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    // Typography
    ['text-btn', { 'font-size': '1rem', 'font-weight': '700', 'line-height': '125%' }],

    // Action focus outline style
    ['menu-focus', { 'outline': '2px solid #19a7ce', 'outline-offset': '4px', 'border-radius': '0.25rem' }],
    ['inside-focus', { 'outline': '2px solid #19a7ce', 'outline-offset': '-2px' }],
    ['action-focus', { 'outline': '2px solid inherit', 'outline-offset': '2px' }],

    // Truncature
    [/^truncate-(\d+)$/, ([, d]) => ({
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'display': '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': `${d}`,
    })],
  ],
  shortcuts: {
    'text-color': 'color-black  dark:color-white',
    'bg-input': 'bg-lightgrey/30 dark:bg-darkgrey',
    'bg-base': 'bg-white dark:bg-darkbg',
    'bg-inverse': 'bg-darkbg dark:bg-white',
    'border-base': 'border border-[#cccccc] dark:border-grey rounded',
    'btn-base': 'relative h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:action-focus appearance-none ws-nowrap disabled:pointer-events-none disabled:opacity-50',

    // Layout
    'grid-layout': 'grid grid-cols-4 gap-4 md:(grid-cols-12 gap-4)',

    // Buttons
    'btn': 'btn-base bg-primary text-white hover:bg-primary/90',
    'btn-danger': 'btn-base bg-danger text-white hover:bg-danger/90',
    'btn-secondary': 'btn-base bg-inherit border-2 border-primary text-color hover:bg-secondary/10',
    'btn-icon': 'btn-base px-2 bg-transparent hover:bg-primary/20',
    'btn-icon-inverse': 'btn-icon text-white dark:(text-black)',
    'btn-link': 'bg-transparent hover:bg-primary/20 rounded-md transition-colors focus-visible:action-focus appearance-none disabled:pointer-events-none disabled:opacity-50',
    'btn-small': 'h-8 px-3 text-xs',
    'btn--loading': 'relative pointer-events-none important:pr-9.5 after:border-inherit after:border-r-transparent',
  },
  presets: [
    presetUno(),
    presetIcons({
      customizations: {
        iconCustomizer(collection, icon, props) {
          props.width = '1.25rem'
          props.height = '1.25rem'
        },
      },
    }),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        mono: 'DM Mono',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
    },
    colors: {
      'primary': '#19a7ce',
      'secondary': '#999999',
      'neutral': '#6498e5',
      'success': '#4caf50',
      'success-bg': '#e8f5e9',
      'warning': '#ff9800',
      'warning-bg': '#fff3e0',
      'danger': '#e87975',
      'danger-bg': '#f8e4de',
      'grey': '#4d4d4d',
      'darkgrey': '#323232',
      'lightgrey': '#cccccc',
      'darkbg': '#262626',
    },
    breakpoints: {
      // xs: '320px',
      // sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // "2xl": "1536px",
      // "xxl": "1536px"
    },
  },
})

import {
  defineConfig,
  presetUno,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetIcons } from 'unocss/preset-icons'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections:{
        'custom': FileSystemIconLoader(
          './public/icons',
          svg => svg.replace(/#000/, 'currentColor')
      ),
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        }
      }
    }),
    presetTypography({
      selectorName: "markdown",
      cssExtend: {
        "h1":{ "font-size": "2rem" },
        "h2":{ "font-size": "1.5rem"},
        "h3":{ "font-size": "1.25rem" },
        "h4":{ "font-size": "1rem" },
        "h5":{ "font-size": "0.875rem" },
        "h6":{ "font-size": "0.75rem" },
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors:{
      otdm:{
        neutral : "rgb(255,252,246)",
        primary : "theme('colors.cyan.500')",
        secondary : "theme('colors.cyan.700')",
        text : "theme('colors.zinc.50')",
        preh: "theme('colors.zinc.300')",
      },
      docs:{
        primary : "rgb(247,247,247)",
        secondary : "rgb(255,228,181)",
        text : "theme('colors.zinc.700')",
        link : "theme('colors.sky.500')",
      }
    }
  },
  preflights: [{
    getCSS: () => `
      *:focus-visible {
        outline: 3px solid theme('colors.cyan.900');
        border-radius: 2px;
      }
    `
  }],
  rules: [
    ["inset-tooltip", { "bottom": "-85%", "left": "50%", "transform": "translateX(-50%)" }],
    ["caret-nav", { "caret-color": "theme('colors.sky.600')" }],
  ],
  shortcuts: [
    {
      'box-main': 'bg-docs-primary border-(2 docs-secondary)',
      'box-link': 'text-docs-link hover:underline decoration-2 outline-cyan-600',
      'box-tooltip': 'inline-block absolute inset-tooltip bg-docs-primary text-(xs docs-text nowrap) border-(2 docs-secondary) p-2 rounded-md transition pointer-events-none',
    },
    [
    /^btn-(.+?)(-style)?$/, match => {
      const base = 'flex justify-center items-center rounded-lg size-12 '
      const styles: { [key: string]: string } = {
          search: 'bg-cyan-500 hover:bg-cyan-600 sm:(text-slate-200 bg-blue-900 hover:bg-blue-950)',
          docs: 'text-orange-900 bg-orange-400 hover:bg-orange-500',
          download: 'text-yellow-900 bg-yellow-300 hover:bg-yellow-400',
          github: 'bg-slate-50 hover:bg-slate-200',
          moon: 'text-yellow-100 bg-sky-900 hover:bg-sky-950',
          sun: 'text-orange-300 bg-sky-100 hover:bg-sky-300',
          menu: 'bg-cyan-500 hover:bg-cyan-600 sm:(text-green-900 bg-green-500 hover:bg-green-600)',
        }

        if(match[1] === 'base'){
          return base
        }

        if (match[2]){
          return styles[match[1]] || ''
        }

        return `${base} ${styles[match[1]] || '' }`
      }
    ]
  ]
})
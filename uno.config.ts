import {
  defineConfig,
  presetUno,
  presetTypography,
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
    transformerVariantGroup(),
  ],
  rules: [
    ["bg-c-base", { "background-color": "#FFFCF6" }],
    ["bg-c-docs", { "background-color": "#F7F7F7" }],
    ["border-c-docs", { "border-color": "#FFE4B5" }],
    ["inset-tooltip", { "bottom": "-75%", "left": "50%", "transform": "translateX(-50%)" }],
  ],
  shortcuts: [
    {
      'font-main': 'text-zinc-700',
      'font-main-link': 'text-sky-500 hover:underline decoration-2',
      'box-main': 'bg-c-docs border-c-docs border-2',
    },
    {
      'btn-base': 'flex justify-center items-center size-12 rounded-lg',
      'btn-docs': 'text-orange-900 bg-orange-400 hover:bg-orange-500',
      'btn-download': 'text-yellow-900 bg-yellow-300 hover:bg-yellow-400',
      'btn-github': 'text-black bg-slate-100 hover:bg-slate-300',
      'btn-moon': 'text-yellow-100 bg-sky-900 hover:bg-sky-950',
      'btn-sun': 'text-orange-300 bg-sky-100 hover:bg-sky-300',
    },
  ]
})
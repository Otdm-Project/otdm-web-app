import { tv } from 'tailwind-variants';

export const otdmButton = tv({
    base: 'flex justify-center items-center size-14 rounded-lg',
    variants: {
        color:{
            docs: 'text-orange-900 bg-orange-400 hover:bg-orange-500',
            download: 'text-yellow-900 bg-yellow-300 hover:bg-yellow-400',
            git: 'text-black bg-slate-100 hover:bg-slate-300',
            darkMode: 'text-yellow-100 bg-sky-900 hover:bg-sky-950',
            lightMode: 'text-orange-300 bg-sky-100',
        }
    }
})

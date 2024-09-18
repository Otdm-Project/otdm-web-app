import { tv } from 'tailwind-variants';

export const otdmButton = tv({
    base: 'flex justify-center items-center size-12 rounded-lg',
    variants: {
        color:{
            docs: 'text-orange-900 bg-orange-400',
            download: 'text-yellow-900 bg-yellow-300',
            git: 'text-black bg-sky-100',
            darkMode: 'text-yellow-100 bg-sky-900',
            lightMode: 'text-orange-300 bg-sky-100',
        }
    }
})

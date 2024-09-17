import { tv } from 'tailwind-variants';

export const otdmButton = tv({
    base: 'font-semibold rounded-full text-white',
    variants: {
        color:{
            docs: 'bg-orange-500',
            download: 'bg-yellow-500',
            git: 'bg-sky-500',
            modeChange: 'bg-indigo-500',
        }
    }
})
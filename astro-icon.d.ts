declare module 'astro-icon/components' {
    import { ComponentProps } from 'astro';
    interface Props extends HTMLAttributes<"svg"> {
        name: string;
        title?: string;
        size?: number;
        width?: number;
        height?: number;
    }
    export const Icon: (props: IconProps) => JSX.Element;
}
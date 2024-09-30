declare module "astro-icon/components" {
  import { ComponentProps } from "astro";
  interface Props extends HTMLAttributes<"svg"> {
    name: string;
    title?: string;
    size?: number | string;
    width?: number | string;
    height?: number | string;
  }
  export const Icon: (props: IconProps) => JSX.Element;
}
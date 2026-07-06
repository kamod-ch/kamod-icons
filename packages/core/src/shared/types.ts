import type { JSX } from "preact";

export type IconProps = JSX.SVGAttributes<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

import type { SVGAttributes } from "preact";

export type IconProps = SVGAttributes<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

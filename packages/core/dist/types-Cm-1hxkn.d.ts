import { SVGAttributes } from 'preact';

type IconProps = SVGAttributes<SVGSVGElement> & {
    size?: number | string;
    title?: string;
};

export type { IconProps as I };

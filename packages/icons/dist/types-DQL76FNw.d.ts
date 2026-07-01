import { JSX } from 'preact';

type IconProps = JSX.SVGAttributes<SVGSVGElement> & {
    size?: number | string;
    title?: string;
};

export type { IconProps as I };

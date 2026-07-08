import type { IconProps } from "../../../shared/types";

export function TagRight2Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4.22 3.1h11.44c.68 0 1.53.47 1.89 1.05l4.18 6.68c.4.65.36 1.67-.1 2.28l-5.18 6.9c-.37.49-1.17.89-1.78.89H4.22c-1.75 0-2.81-1.92-1.89-3.41l2.77-4.43c.37-.59.37-1.55 0-2.14L2.33 6.49c-.92-1.47.15-3.39 1.89-3.39"/>
    </svg>
  );
}

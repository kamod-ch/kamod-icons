import type { IconProps } from "../../shared/types";

export function FeatherIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.24 12.24a6.003 6.003 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8 2 22m15.5-7H9"/>
    </svg>
  );
}

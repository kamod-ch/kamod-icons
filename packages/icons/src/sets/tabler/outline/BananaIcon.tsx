import type { IconProps } from "../../../shared/types";

export function BananaIcon({
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
      <path d="M20 6V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a9.09 9.09 0 0 1-4 8.08c-2 1.31-5 1.57-7 1.59a2 2 0 0 0-2 2 2 2 0 0 0 1.16 1.81c2.69 1.2 9.46 3.44 14.35-1.66C23 13.08 20 6 20 6"/>
    </svg>
  );
}

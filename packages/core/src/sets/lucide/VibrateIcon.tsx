import type { IconProps } from "../../shared/types";

export function VibrateIcon({
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
      <path d="m2 8 2 2-2 2 2 2-2 2m20-8-2 2 2 2-2 2 2 2"/><rect x="8" y="5" rx="1"/>
    </svg>
  );
}

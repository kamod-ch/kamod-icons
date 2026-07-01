import type { IconProps } from "../../../shared/types";

export function OldIcon({
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
      <path d="m11 21-1-4-2-3V8"/><path d="m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 13-2 4m11 0v-8.5a1.5 1.5 0 0 1 3 0v.5"/>
    </svg>
  );
}

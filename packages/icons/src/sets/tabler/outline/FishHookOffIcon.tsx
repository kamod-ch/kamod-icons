import type { IconProps } from "../../../shared/types";

export function FishHookOffIcon({
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
      <path d="M16 9v3m-.085 3.924A5 5 0 0 1 6 15v-4l3 3m5-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-2V3M3 3l18 18"/>
    </svg>
  );
}

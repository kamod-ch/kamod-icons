import type { IconProps } from "../../../shared/types";

export function StretchingIcon({
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
      <path d="M15 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 20l5-.5 1-2m7 2.5v-5h-5.5L15 8.5l-5.5 1 1.5 2"/>
    </svg>
  );
}

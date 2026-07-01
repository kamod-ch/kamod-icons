import type { IconProps } from "../../../shared/types";

export function PinnedIcon({
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
      <path d="M9 4v6l-2 4v2h10v-2l-2-4V4m-3 12v5M8 4h8"/>
    </svg>
  );
}

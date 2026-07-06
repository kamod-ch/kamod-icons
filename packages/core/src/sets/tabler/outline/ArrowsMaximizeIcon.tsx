import type { IconProps } from "../../../shared/types";

export function ArrowsMaximizeIcon({
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
      <path d="M16 4h4v4m-6 2 6-6M8 20H4v-4m0 4 6-6m6 6h4v-4m-6-2 6 6M8 4H4v4m0-4 6 6"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function ArrowsDoubleNwSeIcon({
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
      <path d="M14 21 3 10m0 4v-4h4m10 4h4v-4M10 3l11 11"/>
    </svg>
  );
}

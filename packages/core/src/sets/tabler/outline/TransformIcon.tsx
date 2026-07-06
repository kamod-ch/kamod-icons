import type { IconProps } from "../../../shared/types";

export function TransformIcon({
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
      <path d="M3 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m18 5V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3m4 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>
    </svg>
  );
}

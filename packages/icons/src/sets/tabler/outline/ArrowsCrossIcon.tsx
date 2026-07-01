import type { IconProps } from "../../../shared/types";

export function ArrowsCrossIcon({
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
      <path d="M16 4h4v4m-5 1 5-5M4 20l5-5m7 5h4v-4M4 4l16 16"/>
    </svg>
  );
}

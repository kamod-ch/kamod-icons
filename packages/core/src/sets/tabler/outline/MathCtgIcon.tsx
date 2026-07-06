import type { IconProps } from "../../../shared/types";

export function MathCtgIcon({
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
      <path d="M10 8h4m7 0h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1m-8-4v8m-5-6a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0"/>
    </svg>
  );
}

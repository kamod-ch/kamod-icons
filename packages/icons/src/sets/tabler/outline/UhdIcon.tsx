import type { IconProps } from "../../../shared/types";

export function UhdIcon({
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
      <path d="M10 16V8m0 4h4m0-4v8m3-8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM3 8v6a2 2 0 1 0 4 0V8"/>
    </svg>
  );
}

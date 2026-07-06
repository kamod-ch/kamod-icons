import type { IconProps } from "../../../shared/types";

export function XdIcon({
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
      <path d="m6 8 4 8m-4 0 4-8m4 0v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function XmarkIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M5.333 19.667a1 1 0 0 1-.707-1.708L17.96 4.627a1 1 0 1 1 1.415 1.414L6.04 19.373a1 1 0 0 1-.707.294Z"/><path d="M18.667 19.667a1 1 0 0 1-.707-.294L4.627 6.04A1 1 0 1 1 6.04 4.625L19.373 17.96a1 1 0 0 1-.706 1.708Z"/></g>
    </svg>
  );
}

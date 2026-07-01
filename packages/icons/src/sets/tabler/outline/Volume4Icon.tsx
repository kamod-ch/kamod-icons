import type { IconProps } from "../../../shared/types";

export function Volume4Icon({
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
      <path d="M9.5 15h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2L13 4.5a.8.8 0 0 1 1.5.5v14a.8.8 0 0 1-1.5.5z"/>
    </svg>
  );
}

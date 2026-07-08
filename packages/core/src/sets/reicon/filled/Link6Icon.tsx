import type { IconProps } from "../../../shared/types";

export function Link6Icon({
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
      <path fill="currentColor" d="M9.793 7.207a1 1 0 0 1 0-1.414l3.05-3.05a5.95 5.95 0 1 1 8.414 8.414l-3.05 3.05a1 1 0 0 1-1.414-1.414l3.05-3.05a3.95 3.95 0 0 0-5.586-5.586l-3.05 3.05a1 1 0 0 1-1.414 0Z"/><path fill="currentColor" d="M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z"/><path fill="currentColor" d="M14.207 18.207a1 1 0 0 0-1.414-1.414l-3.05 3.05a3.95 3.95 0 0 1-5.586-5.586l3.05-3.05a1 1 0 0 0-1.414-1.414l-3.05 3.05a5.95 5.95 0 1 0 8.414 8.414z"/>
    </svg>
  );
}

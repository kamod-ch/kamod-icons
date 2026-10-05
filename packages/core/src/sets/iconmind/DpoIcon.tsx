import type { IconProps } from "../../shared/types";

export function DpoIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 6.5A3.5 3.5 0 0 1 5.5 3h5A3.5 3.5 0 0 1 14 6.5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 2 6.5m15 0 2 2L21.5 6M2 17.5A3.5 3.5 0 0 1 5.5 14h5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 2 17.5M17.5 15l4 4m0-4-4 4"/>
    </svg>
  );
}

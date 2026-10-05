import type { IconProps } from "../../shared/types";

export function WindStrongIcon({
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
      <path d="M3 6h12a3 3 0 1 0-3-3m-9 8h17M3 15h14M3 20h12a3 3 0 1 1-3-3"/>
    </svg>
  );
}

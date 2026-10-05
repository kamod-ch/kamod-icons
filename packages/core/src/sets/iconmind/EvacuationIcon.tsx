import type { IconProps } from "../../shared/types";

export function EvacuationIcon({
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
      <path d="M13 3h8v18h-8M4 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M7 9v5l-3 3m3-3 3 3m-6-6h6"/>
    </svg>
  );
}

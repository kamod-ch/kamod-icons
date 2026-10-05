import type { IconProps } from "../../shared/types";

export function DesertIcon({
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
      <path d="M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M6 6h2.5m7 0H18M2 19a6 6 0 0 1 12 0"/><path d="M12 19a5 5 0 0 1 10 0M2 19h20"/>
    </svg>
  );
}

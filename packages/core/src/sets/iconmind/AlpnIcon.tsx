import type { IconProps } from "../../shared/types";

export function AlpnIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 4h18M3 20h18M8 6l2.5 2.5M16 6l-2.5 2.5M9 15l2.5 2.5"/>
    </svg>
  );
}

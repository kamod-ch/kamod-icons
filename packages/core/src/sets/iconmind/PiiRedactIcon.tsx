import type { IconProps } from "../../shared/types";

export function PiiRedactIcon({
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
      <path d="M3 5h18M3 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m15 0h3M3 17h10"/>
    </svg>
  );
}

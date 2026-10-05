import type { IconProps } from "../../shared/types";

export function HandshakeIcon({
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
      <path d="M2 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m16 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8h12m0 0-3-3m3 11H6m0 0 3 3"/>
    </svg>
  );
}

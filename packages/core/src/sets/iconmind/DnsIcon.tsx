import type { IconProps } from "../../shared/types";

export function DnsIcon({
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
      <path d="M6 3v18M8 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2m0 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2"/>
    </svg>
  );
}

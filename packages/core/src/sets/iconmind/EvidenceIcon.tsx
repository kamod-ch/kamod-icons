import type { IconProps } from "../../shared/types";

export function EvidenceIcon({
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
      <path d="M13 3H6v18h12V8M9 7h6"/><path d="M8 13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m1 5h4"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function ArtifactPromoteIcon({
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
      <path d="M4 3v18M4 6h16M4 18h16m0-15v18M9.5 11.5 12 9l2.5 2.5M9 15h6"/>
    </svg>
  );
}

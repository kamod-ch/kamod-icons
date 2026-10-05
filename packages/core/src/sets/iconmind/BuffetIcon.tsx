import type { IconProps } from "../../shared/types";

export function BuffetIcon({
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
      <path d="M2 13h20M3 13a4 4 0 0 1 8 0m2 0a4 4 0 0 1 8 0M6 13v6m12-6v6"/>
    </svg>
  );
}

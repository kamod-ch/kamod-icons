import type { IconProps } from "../../shared/types";

export function EnsembleIcon({
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
      <path d="m12 3 3 3-3 3-3-3ZM7 13l3 3-3 3-3-3Zm10 0 3 3-3 3-3-3Z"/>
    </svg>
  );
}

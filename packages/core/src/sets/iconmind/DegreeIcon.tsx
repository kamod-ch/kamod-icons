import type { IconProps } from "../../shared/types";

export function DegreeIcon({
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
      <path d="m2 8 4-4h12l4 4-4 4H6Zm3 8a2 2 0 0 0 0 4h14a2 2 0 0 0 0-4Z"/>
    </svg>
  );
}

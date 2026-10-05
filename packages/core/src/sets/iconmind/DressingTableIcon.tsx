import type { IconProps } from "../../shared/types";

export function DressingTableIcon({
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
      <path d="M8 8a4 5 0 1 1 8 0 4 5 0 1 1-8 0m4 5v4M2 17h20M4 17v4m16-4v4"/>
    </svg>
  );
}

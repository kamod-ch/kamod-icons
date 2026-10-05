import type { IconProps } from "../../shared/types";

export function HammockIcon({
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
      <path d="M4 6v15M20 6v15M4 8c0 8 16 8 16 0"/><path d="M4 12c0 7 16 7 16 0"/>
    </svg>
  );
}

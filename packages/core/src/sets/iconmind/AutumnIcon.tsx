import type { IconProps } from "../../shared/types";

export function AutumnIcon({
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
      <path d="M6 14C6 8 10 4 16 4c0 6-4 10-10 10m8 1 4 4m-3 1 4-4M4 21h16"/>
    </svg>
  );
}

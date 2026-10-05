import type { IconProps } from "../../shared/types";

export function UltrasoundIcon({
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
      <path d="M4 3h6v11a3 3 0 0 1-6 0Zm9 3a4 4 0 0 1 0 8"/><path d="M13 3a7 7 0 0 1 0 14"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function ControlPlaneIcon({
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
      <path d="M9 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 7h7m6 0h7m-10 3v7M2 17h20"/>
    </svg>
  );
}

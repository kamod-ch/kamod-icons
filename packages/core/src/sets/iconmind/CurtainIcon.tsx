import type { IconProps } from "../../shared/types";

export function CurtainIcon({
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
      <path d="M2 4h20M3 4v17h5c1.5 0 2-1 2-3V4m11 0v17h-5c-1.5 0-2-1-2-3V4"/>
    </svg>
  );
}

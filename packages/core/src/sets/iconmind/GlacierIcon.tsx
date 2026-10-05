import type { IconProps } from "../../shared/types";

export function GlacierIcon({
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
      <path d="m2 8 6 6 6-6 6 6M2 15l6 6 6-6 6 6M6 4l4 4m4-4 4 4"/>
    </svg>
  );
}

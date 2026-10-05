import type { IconProps } from "../../shared/types";

export function SunglassesIcon({
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
      <path d="M3 9h7v5a3.5 3.5 0 0 1-7 0Zm11 0h7v5a3.5 3.5 0 0 1-7 0Zm-4 0h4"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function GreenBuildingIcon({
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
      <path d="M5 21V10h14v11Zm0-6h14M8.5 9.5c0-4.2 2.8-7 7-7 0 4.2-2.8 7-7 7"/>
    </svg>
  );
}

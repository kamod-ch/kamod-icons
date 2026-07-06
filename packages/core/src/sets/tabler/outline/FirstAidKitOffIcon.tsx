import type { IconProps } from "../../../shared/types";

export function FirstAidKitOffIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8.595 4.577A2 2 0 0 1 10 4h4a2 2 0 0 1 2 2v2m-4 0h6a2 2 0 0 1 2 2v6m-.576 3.405A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m2 6h4m-2-2v4M3 3l18 18"/>
    </svg>
  );
}

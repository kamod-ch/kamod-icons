import type { IconProps } from "../../shared/types";

export function ForestIcon({
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
      <path d="m2 13 5-5 5 5Zm8-3 6-6 6 6Zm-3 8 5-5 5 5Zm-4 3h18"/>
    </svg>
  );
}

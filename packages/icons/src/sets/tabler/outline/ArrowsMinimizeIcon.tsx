import type { IconProps } from "../../../shared/types";

export function ArrowsMinimizeIcon({
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
      <path d="M5 9h4V5M3 3l6 6m-4 6h4v4m-6 2 6-6m10-6h-4V5m0 4 6-6m-2 12h-4v4m0-4 6 6"/>
    </svg>
  );
}

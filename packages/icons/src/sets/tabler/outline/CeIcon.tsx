import type { IconProps } from "../../../shared/types";

export function CeIcon({
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
      <path d="M9 6a6 6 0 1 0 0 12M21 6a6 6 0 1 0 0 12m-6-6h6"/>
    </svg>
  );
}

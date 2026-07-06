import type { IconProps } from "../../../shared/types";

export function TextPlusIcon({
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
      <path d="M19 10H5m0-4h14m-5 8H5m0 4h6m7-3v6m-3-3h6"/>
    </svg>
  );
}

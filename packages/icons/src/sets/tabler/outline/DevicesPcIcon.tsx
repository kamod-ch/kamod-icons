import type { IconProps } from "../../../shared/types";

export function DevicesPcIcon({
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
      <path d="M3 5h6v14H3zm9 4h10v7H12zm2 10h6m-3-3v3M6 13v.01M6 16v.01"/>
    </svg>
  );
}

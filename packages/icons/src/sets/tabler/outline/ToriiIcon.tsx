import type { IconProps } from "../../../shared/types";

export function ToriiIcon({
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
      <path d="M4 4q8 2 16 0M4 8h16m-8-3v3m6-3.5V20M6 4.5V20"/>
    </svg>
  );
}

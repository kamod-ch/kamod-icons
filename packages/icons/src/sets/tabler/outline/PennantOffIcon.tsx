import type { IconProps } from "../../../shared/types";

export function PennantOffIcon({
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
      <path d="M8 21h4m-2 0V10m0-4V3m0 1 9 4-4.858 2.16m-2.764 1.227L10 12M3 3l18 18"/>
    </svg>
  );
}

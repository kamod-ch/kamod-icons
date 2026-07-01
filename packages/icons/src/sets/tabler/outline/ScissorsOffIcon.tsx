import type { IconProps } from "../../../shared/types";

export function ScissorsOffIcon({
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
      <path d="M4.432 4.442a3 3 0 1 0 4.114 4.146M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.6-1.6L12 12m2-2 5-5M3 3l18 18"/>
    </svg>
  );
}

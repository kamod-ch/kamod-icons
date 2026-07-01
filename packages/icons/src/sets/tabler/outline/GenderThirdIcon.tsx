import type { IconProps } from "../../../shared/types";

export function GenderThirdIcon({
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
      <path d="M11 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0m0 0H8m0 0L3 8v8z"/>
    </svg>
  );
}

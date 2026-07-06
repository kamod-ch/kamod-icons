import type { IconProps } from "../../shared/types";

export function RemoveFormattingIcon({
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
      <path d="M4 7V4h16v3M5 20h6m2-16L8 20m7-5 5 5m0-5-5 5"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function SearchAlertIcon({
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
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 7v4m0 4h.01"/>
    </svg>
  );
}

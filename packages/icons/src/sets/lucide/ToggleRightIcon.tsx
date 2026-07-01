import type { IconProps } from "../../shared/types";

export function ToggleRightIcon({
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
      <circle cx="15" cy="12" r="3"/><rect x="2" y="5" rx="7"/>
    </svg>
  );
}

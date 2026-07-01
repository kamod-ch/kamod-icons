import type { IconProps } from "../../../shared/types";

export function HemisphereIcon({
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
      <path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9"/><path d="M3 9a9 9 0 0 0 18 0"/>
    </svg>
  );
}

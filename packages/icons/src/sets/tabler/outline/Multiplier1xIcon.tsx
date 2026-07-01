import type { IconProps } from "../../../shared/types";

export function Multiplier1xIcon({
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
      <path d="M9 16V8l-2 2m6 6 4-4m0 4-4-4"/>
    </svg>
  );
}

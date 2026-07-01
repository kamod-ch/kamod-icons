import type { IconProps } from "../../../shared/types";

export function Multiplier05xIcon({
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
      <path d="M8 16h2a2 2 0 1 0 0-4H8V8h4m-7 8v.01M15 16l4-4m0 4-4-4"/>
    </svg>
  );
}

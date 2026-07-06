import type { IconProps } from "../../../shared/types";

export function UnderlineIcon({
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
      <path d="M7 5v5a5 5 0 0 0 10 0V5M5 19h14"/>
    </svg>
  );
}

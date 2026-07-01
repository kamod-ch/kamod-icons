import type { IconProps } from "../../shared/types";

export function GamepadIcon({
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
      <path d="M6 12h4m-2-2v4m7-1h.01M18 11h.01"/><rect x="2" y="6" rx="2"/>
    </svg>
  );
}

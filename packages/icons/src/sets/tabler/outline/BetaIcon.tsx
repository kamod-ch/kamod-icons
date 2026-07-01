import type { IconProps } from "../../../shared/types";

export function BetaIcon({
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
      <path d="M8 22V8a4 4 0 0 1 4-4h.5a3.5 3.5 0 0 1 0 7H12h.5A4.5 4.5 0 1 1 8 15.5V15"/>
    </svg>
  );
}

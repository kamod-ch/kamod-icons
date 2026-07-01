import type { IconProps } from "../../../shared/types";

export function TornadoIcon({
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
      <path d="M21 4H3m10 12H7m4 4h4M6 8h14M4 12h12"/>
    </svg>
  );
}

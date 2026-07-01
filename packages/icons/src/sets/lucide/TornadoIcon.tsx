import type { IconProps } from "../../shared/types";

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
      <path d="M21 4H3m15 4H6m13 4H9m7 4h-6m1 4H9"/>
    </svg>
  );
}

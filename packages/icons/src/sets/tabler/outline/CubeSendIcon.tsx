import type { IconProps } from "../../../shared/types";

export function CubeSendIcon({
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
      <path d="m16 12.5-5-3 5-3 5 3V15l-5 3z"/><path d="M11 9.5V15l5 3m0-5.455 5-3.03M7 9H2m5 3H4m3 3H6"/>
    </svg>
  );
}

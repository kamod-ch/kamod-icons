import type { IconProps } from "../../../shared/types";

export function CylinderIcon({
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
      <path stroke="currentColor" d="M12 2c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3Zm0 14c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 5v14M4 5v14"/>
    </svg>
  );
}

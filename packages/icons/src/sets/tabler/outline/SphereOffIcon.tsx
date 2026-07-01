import type { IconProps } from "../../../shared/types";

export function SphereOffIcon({
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
      <path d="M3 12c0 1.657 4.03 3 9 3 .987 0 1.936-.053 2.825-.15m3.357-.67C19.917 13.633 21 12.86 21 12"/><path d="M20.051 16.027A9 9 0 0 0 7.968 3.952m-2.34 1.692a9 9 0 0 0 12.74 12.716M3 3l18 18"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function WindowFunctionIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 4h12.5M3 10h12.5M3 16h12.5M3 22h12.5m3-15H21v12h-2.5"/>
    </svg>
  );
}

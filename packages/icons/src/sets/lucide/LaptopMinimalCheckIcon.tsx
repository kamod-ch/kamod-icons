import type { IconProps } from "../../shared/types";

export function LaptopMinimalCheckIcon({
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
      <path d="M2 20h20M9 10l2 2 4-4"/><rect x="3" y="4" rx="2"/>
    </svg>
  );
}

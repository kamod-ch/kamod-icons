import type { IconProps } from "../../../shared/types";

export function WorldShareIcon({
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
      <path d="M20.94 13.045A9 9 0 1 0 11.987 21M3.6 9h16.8M3.6 15H13"/><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.529 10.294M16 22l5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}

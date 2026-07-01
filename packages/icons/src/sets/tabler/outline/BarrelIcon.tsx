import type { IconProps } from "../../../shared/types";

export function BarrelIcon({
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
      <path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22Q20 8.61 20 12t-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12t1.437-6.78A2 2 0 0 1 7.278 4"/><path d="M14 4q1 4 1 8c0 4-.333 5.333-1 8M10 4q-1 4-1 8c0 4 .333 5.333 1 8m-5.5-4h15m0-8h-15"/>
    </svg>
  );
}

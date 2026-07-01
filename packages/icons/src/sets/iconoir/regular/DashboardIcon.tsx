import type { IconProps } from "../../../shared/types";

export function DashboardIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8 1.343 3.2 3 3.2 3-1.433 3-3.2Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m-8.5-.5 3 3m11 0 3-3M2 17h4m12 0h4"/>
    </svg>
  );
}

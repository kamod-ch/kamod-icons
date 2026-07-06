import type { IconProps } from "../../shared/types";

export function ConciergeBellIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2zm18-2a8 8 0 0 0-16 0m8-12v4m-2-4h4"/>
    </svg>
  );
}

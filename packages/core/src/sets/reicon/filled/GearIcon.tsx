import type { IconProps } from "../../../shared/types";

export function GearIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M2.519 16.05a2.01 2.01 0 0 1 .734-2.744 1.51 1.51 0 0 0 0-2.612 2.01 2.01 0 0 1-.734-2.744l1.24-2.15a2.004 2.004 0 0 1 2.739-.735c1.003.58 2.257-.145 2.257-1.307 0-1.108.898-2.008 2.005-2.008h2.48c1.107 0 2.005.9 2.005 2.008 0 1.162 1.255 1.887 2.257 1.307a2.003 2.003 0 0 1 2.74.735l1.24 2.15a2.01 2.01 0 0 1-.735 2.744 1.51 1.51 0 0 0 0 2.612 2.01 2.01 0 0 1 .734 2.743l-1.24 2.151a2.003 2.003 0 0 1-2.739.735c-1.002-.58-2.257.145-2.257 1.307a2.007 2.007 0 0 1-2.006 2.008h-2.478c-1.108 0-2.006-.9-2.006-2.008 0-1.162-1.254-1.887-2.257-1.307a2.004 2.004 0 0 1-2.74-.735zM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}

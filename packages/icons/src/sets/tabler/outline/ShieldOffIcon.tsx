import type { IconProps } from "../../../shared/types";

export function ShieldOffIcon({
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
      <path d="M17.67 17.667A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c.794.036 1.583-.006 2.357-.124m3.128-.926A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.116 9.376M3 3l18 18"/>
    </svg>
  );
}

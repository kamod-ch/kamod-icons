import type { IconProps } from "../../../shared/types";

export function LockOpen2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M7.25 8.25V5A3.25 3.25 0 0 0 4 1.75h0A3.25 3.25 0 0 0 .75 5v1.25m8.75 5.5v1"/><rect x="3.75" y="8.25" rx="2" ry="2"/></g>
    </svg>
  );
}

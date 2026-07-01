import type { IconProps } from "../../../shared/types";

export function MailOutIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5 9 4.5 3L14 9"/><path stroke="currentColor" strokeLinecap="round" d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 14h6m0 0-3-3m3 3-3 3"/>
    </svg>
  );
}

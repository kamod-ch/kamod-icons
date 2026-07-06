import type { IconProps } from "../../../shared/types";

export function WhiteFlagIcon({
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
      <path fill="currentColor" d="m20.94 4.654-.89 9.8a.6.6 0 0 1-.598.546H5l.95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 .95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654l-.891 9.8a.6.6 0 0 1-.598.546zm0 0-.6 6"/>
    </svg>
  );
}

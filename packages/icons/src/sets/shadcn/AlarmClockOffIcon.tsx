import type { IconProps } from "../../shared/types";

export function AlarmClockOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.87 6.87a8 8 0 1 0 11.26 11.26m1.77-3.88q.103-.62.1-1.25a8 8 0 0 0-9.25-7.9M22 6l-3-3M6 19l-2 2M2 2l20 20M4 4 2 6"/>
    </svg>
  );
}

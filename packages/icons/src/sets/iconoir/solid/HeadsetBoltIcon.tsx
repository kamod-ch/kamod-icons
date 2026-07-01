import type { IconProps } from "../../../shared/types";

export function HeadsetBoltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 13 10 17h4l-2.5 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 17.438v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.463a.6.6 0 0 1-.746.582l-1.74-.434A2 2 0 0 1 2 17.438m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582l1.74-.434A2 2 0 0 0 22 17.438"/>
    </svg>
  );
}

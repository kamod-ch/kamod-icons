import type { IconProps } from "../../../shared/types";

export function CinemaOldIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m0 0v10"/>
    </svg>
  );
}

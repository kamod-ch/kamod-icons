import type { IconProps } from "../../../shared/types";

export function CalendarDaysIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 2.75v-2m6.5 2v-2"/><rect x="2.25" y="2.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="2" ry="2"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.25h13.5"/><path fill="currentColor" d="M9 8.25c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1Zm3.5 2c.551 0 1-.449 1-1s-.449-1-1-1-1 .449-1 1 .449 1 1 1Zm-3.5 1c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1Zm-3.5 0c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1Zm7 0c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1Z"/></g>
    </svg>
  );
}

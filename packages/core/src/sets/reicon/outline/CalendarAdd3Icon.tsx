import type { IconProps } from "../../../shared/types";

export function CalendarAdd3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8 2v3m8-3v3M3.5 9.09h17M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8m1.49-3.95h-2.98M18 17.59v2.99"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"/>
    </svg>
  );
}

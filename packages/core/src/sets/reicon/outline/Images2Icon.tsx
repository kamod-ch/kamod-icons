import type { IconProps } from "../../../shared/types";

export function Images2Icon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.587 12.243 5.206-5.2a1 1 0 0 1 1.414 0l3.043 3.043"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 6.75v6.5a2 2 0 0 0 2 2h8.5"/><rect x="4.75" y="2.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="2" ry="2" transform="matrix(-1 0 0 -1 21 15)"/><path fill="currentColor" d="M8 7c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1Z"/></g>
    </svg>
  );
}

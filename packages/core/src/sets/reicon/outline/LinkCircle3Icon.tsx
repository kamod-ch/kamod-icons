import type { IconProps } from "../../../shared/types";

export function LinkCircle3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.94 14.51c-.62-.23-1.17-.68-1.52-1.32-.8-1.46-.31-3.36 1.11-4.24L9.87 7.5c1.41-.88 3.23-.4 4.03 1.05.8 1.46.31 3.36-1.11 4.24l-.31.22"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.11 9.45c.62.23 1.17.68 1.52 1.32.8 1.46.31 3.36-1.11 4.24l-2.34 1.45c-1.41.88-3.23.4-4.03-1.05-.8-1.46-.31-3.36 1.11-4.24l.31-.22"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>
    </svg>
  );
}

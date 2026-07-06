import type { IconProps } from "../../shared/types";

export function HopIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1m-7 7.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5m6.5-1c1 2 1 3.5 1 6-2.5 0-4 0-6-1m8.5-5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5m-6 4.5c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5m5-1c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"/>
    </svg>
  );
}

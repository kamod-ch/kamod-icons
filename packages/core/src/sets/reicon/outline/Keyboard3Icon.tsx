import type { IconProps } from "../../../shared/types";

export function Keyboard3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 4h9c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v6c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-9c-.62 0-1.17-.02-1.66-.09C3.21 19.62 2.5 18.38 2.5 15V9c0-3.38.71-4.62 3.34-4.91C6.33 4.02 6.88 4 7.5 4m6 6H17M7 15.5h10M10.095 10h.009m-3.009 0h.009"/>
    </svg>
  );
}

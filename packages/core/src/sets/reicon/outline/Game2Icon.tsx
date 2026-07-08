import type { IconProps } from "../../../shared/types";

export function Game2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m9.57 12.46-3.05 3.05m.03-3.02 3.05 3.05M13.53 14h.01m3.93 0h.01m-1.98 1.98v-.02m0-3.92v-.02"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7m4.01-20L13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"/>
    </svg>
  );
}

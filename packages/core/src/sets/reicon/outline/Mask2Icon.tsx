import type { IconProps } from "../../../shared/types";

export function Mask2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.07 4.93 4.93 19.07A9.97 9.97 0 0 1 2 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.97 9.97 0 0 1 22 12M7.76 16.24l5.65 5.66m-2.12-9.19 6.58 6.57M14.83 9.17l6.29 6.3"/>
    </svg>
  );
}

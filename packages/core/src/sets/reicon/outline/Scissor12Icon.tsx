import type { IconProps } from "../../../shared/types";

export function Scissor12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M22 6 8.65 15.98M22 17.97 8.65 7.98"/>
    </svg>
  );
}

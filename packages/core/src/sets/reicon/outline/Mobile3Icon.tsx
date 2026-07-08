import type { IconProps } from "../../../shared/types";

export function Mobile3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 6v10c0 4-1 5-5 5H6c-4 0-5-1-5-5V6c0-4 1-5 5-5h6c4 0 5 1 5 5m-6-1.5H7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 18.1A1.55 1.55 0 1 0 9 15a1.55 1.55 0 0 0 0 3.1"/>
    </svg>
  );
}

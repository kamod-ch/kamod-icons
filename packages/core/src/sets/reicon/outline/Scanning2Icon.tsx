import type { IconProps } from "../../../shared/types";

export function Scanning2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9m6 0h2.5C19.99 2 22 4.01 22 6.5V9m0 7v1.5c0 2.49-2.01 4.5-4.5 4.5H16m-7 0H6.5C4.01 22 2 19.99 2 17.5V15m6.5-4a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-1 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
    </svg>
  );
}

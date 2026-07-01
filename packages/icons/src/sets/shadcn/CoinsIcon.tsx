import type { IconProps } from "../../shared/types";

export function CoinsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m10.09-3.63A5.999 5.999 0 1 1 10.34 18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6h1v4m8.71 3.88.7.71-2.82 2.82"/>
    </svg>
  );
}

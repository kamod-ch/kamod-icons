import type { IconProps } from "../../shared/types";

export function BaggageClaimIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-2 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}

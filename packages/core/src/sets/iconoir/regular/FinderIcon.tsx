import type { IconProps } from "../../../shared/types";

export function FinderIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 15V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 3s-4.5 0-4.5 9H13c0 9 2 9 2 9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2M7 9v2m10-2v2"/>
    </svg>
  );
}

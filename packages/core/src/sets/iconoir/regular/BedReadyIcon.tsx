import type { IconProps } from "../../../shared/types";

export function BedReadyIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 8h8V6m10 2h-8V6m3 14 2 2 4-4"/>
    </svg>
  );
}

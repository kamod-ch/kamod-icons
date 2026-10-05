import type { IconProps } from "../../shared/types";

export function MemoryLoadIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 6h11M3 11h11M3 16h11m3-5h5m-2.5-2.5L22 11l-2.5 2.5"/>
    </svg>
  );
}

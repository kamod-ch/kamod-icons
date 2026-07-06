import type { IconProps } from "../../../shared/types";

export function MotorcycleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14-4-3-9 1-1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8.5h-4.5l-4.5 3m-1.5 4H12l1-2.5 3.5-4.5m-8 1.5c-2-1.5-5-1.5-7 0M19 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
    </svg>
  );
}

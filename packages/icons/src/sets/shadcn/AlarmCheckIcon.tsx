import type { IconProps } from "../../shared/types";

export function AlarmCheckIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a8 8 0 1 0 0-16.001A8 8 0 0 0 12 21M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 13 2 2 4-4"/>
    </svg>
  );
}

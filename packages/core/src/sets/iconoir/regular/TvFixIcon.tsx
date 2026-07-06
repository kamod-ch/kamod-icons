import type { IconProps } from "../../../shared/types";

export function TvFixIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M2 20V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.657 12.828-2.829 2.829m5.657-2.829A2 2 0 1 1 13.657 10m-2.829 8.485A2 2 0 0 0 8 15.657M8.5 2.5 12 6l3.5-3.5"/>
    </svg>
  );
}

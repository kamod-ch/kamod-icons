import type { IconProps } from "../../shared/types";

export function RecentlyViewedIcon({
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
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm1 2h16m-8-4v4"/><path d="M7.3 13.79a5 5 0 0 1 9.4 0"/><path d="M10 15.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

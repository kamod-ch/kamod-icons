import type { IconProps } from "../../shared/types";

export function FolderSyncIcon({
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
      <path d="M20 7v13H4V4h5l3 3h4m-7 4.5h5.5"/><path d="m12.5 9.5 2 2-2 2m-3 1.5H15m-3.5-2-2 2 2 2"/>
    </svg>
  );
}

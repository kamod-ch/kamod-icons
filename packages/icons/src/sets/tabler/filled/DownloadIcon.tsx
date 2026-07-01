import type { IconProps } from "../../../shared/types";

export function DownloadIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M20 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M12 3a1 1 0 0 1 1 1v9.585l3.293-3.292a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-.09.08l.09-.08a1 1 0 0 1-.674.292L12 17h-.032l-.054-.004L12 17a1 1 0 0 1-.617-.213 1 1 0 0 1-.09-.08l-5-5a1 1 0 0 1 1.414-1.414L11 13.585V4a1 1 0 0 1 1-1"/>
    </svg>
  );
}

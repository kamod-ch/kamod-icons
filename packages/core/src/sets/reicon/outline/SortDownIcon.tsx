import type { IconProps } from "../../../shared/types";

export function SortDownIcon({
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
      <path fill="currentColor" d="M19.75 4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h17a.75.75 0 0 1 .75.75Zm-7 7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75ZM5 18.75a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5zm8.47-3.28a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V10a.75.75 0 0 0-1.5 0v8.19l-2.72-2.72a.75.75 0 0 0-1.06 0Z"/>
    </svg>
  );
}

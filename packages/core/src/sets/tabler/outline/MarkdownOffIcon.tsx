import type { IconProps } from "../../../shared/types";

export function MarkdownOffIcon({
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.85-2"/><path d="M7 15V9l2 2 1-1m1 1v4m6.5-1.5.5-.5m-2-1V9M3 3l18 18"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function AlignCenterHorizontalIcon({
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
      <path d="M3 12h2.5m13 0H21M7 8h4v8H7Zm7 1.5h4v5h-4Z"/>
    </svg>
  );
}

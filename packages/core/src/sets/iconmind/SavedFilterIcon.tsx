import type { IconProps } from "../../shared/types";

export function SavedFilterIcon({
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
      <path d="M15 3h3v18l-6-6-6 6V3h3"/><path d="m9 6 3 3 3-3m-3 3v3"/>
    </svg>
  );
}

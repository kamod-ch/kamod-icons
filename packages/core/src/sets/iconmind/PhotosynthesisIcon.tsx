import type { IconProps } from "../../shared/types";

export function PhotosynthesisIcon({
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
      <path d="M6 20c0-9 5.4-12.6 12.6-12.6C18.6 14.6 11.4 20 6 20M16 4l-4 4m8-4-4 4m4 1-3 3"/>
    </svg>
  );
}

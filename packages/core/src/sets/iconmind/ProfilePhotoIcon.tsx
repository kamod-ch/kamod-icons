import type { IconProps } from "../../shared/types";

export function ProfilePhotoIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7 19a5 5 0 0 1 10 0"/>
    </svg>
  );
}

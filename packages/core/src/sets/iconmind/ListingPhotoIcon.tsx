import type { IconProps } from "../../shared/types";

export function ListingPhotoIcon({
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
      <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="m6 9 3-3 3 3 2-2 2 2m-9 5.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/>
    </svg>
  );
}

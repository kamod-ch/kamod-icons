import type { IconProps } from "../../shared/types";

export function TravelReviewIcon({
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
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 5v-5H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/><path d="m12 8.5 2 2-2 2-2-2Z"/>
    </svg>
  );
}

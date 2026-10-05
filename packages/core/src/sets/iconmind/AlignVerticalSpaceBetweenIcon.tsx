import type { IconProps } from "../../shared/types";

export function AlignVerticalSpaceBetweenIcon({
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
      <path d="M3 3h18M7 6h10v4H7Zm0 8h10v4H7Zm-4 7h18"/>
    </svg>
  );
}

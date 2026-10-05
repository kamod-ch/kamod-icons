import type { IconProps } from "../../shared/types";

export function ReorderIcon({
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
      <path d="M9 7h12M9 12h12M9 17h12M4 4v16M2 6l2-2 2 2M2 18l2 2 2-2"/>
    </svg>
  );
}

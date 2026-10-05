import type { IconProps } from "../../shared/types";

export function SchoolPencilIcon({
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
      <path d="m7 16 9-9 3 3-9 9Z"/><path d="m7 16-3 3h6m4-10 3 3"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function ArrowRotaryLeftIcon({
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
      <path d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0v10M13 7H3m4 4L3 7l4-4"/>
    </svg>
  );
}

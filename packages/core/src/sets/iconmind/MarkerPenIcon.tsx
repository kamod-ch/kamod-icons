import type { IconProps } from "../../shared/types";

export function MarkerPenIcon({
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
      <path d="m8 14 8-8 4 4-8 8Z"/><path d="m5 17 3-3 4 4-3 3Zm5-1 4-4"/>
    </svg>
  );
}

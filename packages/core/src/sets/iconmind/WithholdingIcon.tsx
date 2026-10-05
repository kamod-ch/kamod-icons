import type { IconProps } from "../../shared/types";

export function WithholdingIcon({
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
      <path d="M9.5 4h5v2.5L18 10a7 7 0 1 1-12 0l3.5-3.5Z"/><path d="M8.5 12.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 18l6-6m-1.5 5.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}

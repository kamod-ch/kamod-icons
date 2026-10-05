import type { IconProps } from "../../shared/types";

export function ScrewdriverIcon({
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
      <path d="m4 17 4-4 3 3-4 4Zm5.5-2.5L18 6m-1.5 1.5 3-3"/>
    </svg>
  );
}

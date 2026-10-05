import type { IconProps } from "../../shared/types";

export function WorkshopIcon({
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
      <path d="M2 13h20M5 13v8m14-8v8M8 13V6h9v7m-7-7a2.5 2.5 0 0 1 5 0"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function FlashFloodIcon({
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
      <path d="M13.5 4 11 6.5h2.5L11 9m-8 6 2.5-2.5L8 15l2.5-2.5L13 15l2.5-2.5L18 15l2.5-2.5M3 20l2.5-2.5L8 20l2.5-2.5L13 20l2.5-2.5L18 20l2.5-2.5"/>
    </svg>
  );
}

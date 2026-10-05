import type { IconProps } from "../../shared/types";

export function PaintbrushIcon({
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
      <path d="m3 21 9-9m0 0 3-3 4 4-3 3Z"/><path d="m19 13 2-2-4-4-2 2Z"/>
    </svg>
  );
}

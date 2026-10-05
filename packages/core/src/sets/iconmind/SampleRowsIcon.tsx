import type { IconProps } from "../../shared/types";

export function SampleRowsIcon({
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
      <path d="M8 4h13M8 9.5h13m-13 6h13M8 21h13M3.5 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 11.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}

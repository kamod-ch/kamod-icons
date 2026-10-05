import type { IconProps } from "../../shared/types";

export function KettleIcon({
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
      <path d="M6 10h10v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm10 1 4-4M7 10c0-5 8-5 8 0"/>
    </svg>
  );
}

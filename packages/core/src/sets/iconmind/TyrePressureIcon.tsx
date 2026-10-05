import type { IconProps } from "../../shared/types";

export function TyrePressureIcon({
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
      <path d="M2.5 15a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0"/><path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-8a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 0 2.5-2.5"/>
    </svg>
  );
}

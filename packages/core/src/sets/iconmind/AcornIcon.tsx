import type { IconProps } from "../../shared/types";

export function AcornIcon({
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
      <path d="M6 9a6 6 0 0 0 12 0Z"/><path d="M7 9a5 5 0 0 0 5 10 5 5 0 0 0 5-10m-5-6v3"/>
    </svg>
  );
}

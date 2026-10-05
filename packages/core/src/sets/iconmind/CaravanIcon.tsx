import type { IconProps } from "../../shared/types";

export function CaravanIcon({
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
      <path d="M3 15V5h16v10Z"/><path d="M6 8h5v4H6Zm0 9.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M19 10h3"/>
    </svg>
  );
}

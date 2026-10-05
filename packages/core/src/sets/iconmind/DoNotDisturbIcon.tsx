import type { IconProps } from "../../shared/types";

export function DoNotDisturbIcon({
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
      <path d="M9.5 3a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1-5 0Z"/><path d="M7 8h10v13H7Zm2.5 4h5m-5 4h5"/>
    </svg>
  );
}

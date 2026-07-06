import type { IconProps } from "../../../shared/types";

export function MedicineSyrupIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8 21h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1m2-7h4m-2-2v4m-2-9V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"/>
    </svg>
  );
}

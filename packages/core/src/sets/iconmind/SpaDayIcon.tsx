import type { IconProps } from "../../shared/types";

export function SpaDayIcon({
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
      <path d="M6 5a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4Zm-2 7a2.5 2.5 0 0 0 0 5h16a2.5 2.5 0 0 0 0-5Zm-1 8h18"/>
    </svg>
  );
}

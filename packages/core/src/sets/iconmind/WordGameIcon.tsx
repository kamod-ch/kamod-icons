import type { IconProps } from "../../shared/types";

export function WordGameIcon({
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
      <path d="M3 6v12h7V6Zm11 0v12h7V6Z"/><path d="m4.5 14 2-2 2 2m7.5 0h3"/>
    </svg>
  );
}

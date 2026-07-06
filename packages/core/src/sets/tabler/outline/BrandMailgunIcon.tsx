import type { IconProps } from "../../../shared/types";

export function BrandMailgunIcon({
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
      <path d="M17 12a2 2 0 1 0 4 0 9 9 0 1 0-2.987 6.697"/><path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}

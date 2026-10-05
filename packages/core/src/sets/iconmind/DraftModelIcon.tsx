import type { IconProps } from "../../shared/types";

export function DraftModelIcon({
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
      <path d="M5 9.5 7.5 12 5 14.5 2.5 12Zm11.5-3L22 12l-5.5 5.5L11 12Z"/>
    </svg>
  );
}

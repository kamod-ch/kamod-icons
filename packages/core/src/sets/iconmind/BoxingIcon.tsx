import type { IconProps } from "../../shared/types";

export function BoxingIcon({
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
      <path d="M6 7c0-3 3-4 6-4 4 0 7 3 7 7v3H8v-3c-1 0-2-1-2-3m2 9v4h11v-4Z"/>
    </svg>
  );
}

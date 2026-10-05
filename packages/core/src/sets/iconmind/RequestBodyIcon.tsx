import type { IconProps } from "../../shared/types";

export function RequestBodyIcon({
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
      <path d="M13 3H6v18h12V8m-6-1.5v4"/><path d="M9.5 8.5 12 11l2.5-2.5m-5.5 7h6"/>
    </svg>
  );
}

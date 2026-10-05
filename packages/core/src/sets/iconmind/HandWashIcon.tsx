import type { IconProps } from "../../shared/types";

export function HandWashIcon({
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
      <path d="M5 21v-6a2 2 0 0 1 4 0v-3a2 2 0 0 1 4 0v4m6 5v-6a2 2 0 0 0-4 0M7 4v4m5-5v4m5-3v4"/>
    </svg>
  );
}

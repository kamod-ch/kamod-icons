import type { IconProps } from "../../shared/types";

export function MicroscopeIcon({
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
      <path d="M4 21h16M7 21v-4h8m-4 0v-6l5-5"/><path d="M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

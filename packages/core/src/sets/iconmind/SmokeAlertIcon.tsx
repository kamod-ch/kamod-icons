import type { IconProps } from "../../shared/types";

export function SmokeAlertIcon({
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
      <path d="M9 9a3 3 0 0 1 0-6m0 6a3 3 0 0 1 0 6m0 6a3 3 0 0 1 0-6m6 3v-5h5v5ZM3 21h18"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function CheckpointAlertIcon({
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
      <path d="M4 3v18M4 4h16v12H4m8-9v3"/><path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}

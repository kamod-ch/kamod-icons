import type { IconProps } from "../../../shared/types";

export function Tuning3Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75ZM4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm1.25-4a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75ZM11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75ZM3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function RecordMailOffIcon({
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
      <path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14.569 2.557a3 3 0 1 0-4.113-4.149M7 15h8M3 3l18 18"/>
    </svg>
  );
}

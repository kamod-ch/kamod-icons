import type { IconProps } from "../../shared/types";

export function RedactFieldsIcon({
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
      <path d="M3 5h18M6 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m-3 8h18"/>
    </svg>
  );
}

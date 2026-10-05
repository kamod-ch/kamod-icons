import type { IconProps } from "../../shared/types";

export function RabbitIcon({
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
      <path d="M7 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0M7 4.5A1.5 1.5 0 0 1 8.5 3 1.5 1.5 0 0 1 10 4.5v5A1.5 1.5 0 0 1 8.5 11 1.5 1.5 0 0 1 7 9.5Zm7 0A1.5 1.5 0 0 1 15.5 3 1.5 1.5 0 0 1 17 4.5v5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 14 9.5Z"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function SecretIcon({
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
      <path d="M3 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m6.5-3L18 6m-4 4 2.5 2.5m1-6L20 9"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function PollutionIcon({
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
      <path d="M5 21v-9h5v9Zm9 0v-6h5v6Zm-6.5-9a3 3 0 0 1 0-6m0-4a3 3 0 0 1 0 6"/>
    </svg>
  );
}

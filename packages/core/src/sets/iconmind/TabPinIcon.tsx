import type { IconProps } from "../../shared/types";

export function TabPinIcon({
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
      <path d="M2 19V9l2-2h6l2 2v10M2 19h20m-7-9a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v3.5"/>
    </svg>
  );
}

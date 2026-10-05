import type { IconProps } from "../../shared/types";

export function DentistChairIcon({
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
      <path d="M3 16v-4h16v4Zm8 0v5m-4 0h8m1-16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v4"/>
    </svg>
  );
}

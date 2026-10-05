import type { IconProps } from "../../shared/types";

export function DoctorIcon({
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
      <path d="M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M5.4 15a6.6 6.6 0 0 1 13.2 0m-6.6-.5v5M9.5 17h5"/>
    </svg>
  );
}

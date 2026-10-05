import type { IconProps } from "../../shared/types";

export function PatientIcon({
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
      <path d="M4 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 20v-6h20v6M2 17h20"/>
    </svg>
  );
}

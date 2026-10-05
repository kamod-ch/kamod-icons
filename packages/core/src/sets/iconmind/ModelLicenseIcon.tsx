import type { IconProps } from "../../shared/types";

export function ModelLicenseIcon({
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
      <path d="M5 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="m12 6.5 3.5 3.5-3.5 3.5L8.5 10Zm-2.5 11V21m5-3.5V21"/>
    </svg>
  );
}

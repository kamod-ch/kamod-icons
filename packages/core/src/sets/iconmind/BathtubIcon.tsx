import type { IconProps } from "../../shared/types";

export function BathtubIcon({
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
      <path d="M3 11h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm3 7.5V21m12-2.5V21M3 11V7"/>
    </svg>
  );
}

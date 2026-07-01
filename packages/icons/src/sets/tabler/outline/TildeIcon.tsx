import type { IconProps } from "../../../shared/types";

export function TildeIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 12c0-1.657 1.592-3 3.556-3s3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3S20 13.657 20 12"/>
    </svg>
  );
}

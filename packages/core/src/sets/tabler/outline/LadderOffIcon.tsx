import type { IconProps } from "../../../shared/types";

export function LadderOffIcon({
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
      <path d="M8 3v1m0 4v13m8-18v9m0 4v5m-8-7h6m-6-4h2m4 0h2m-6-4h6M8 18h8M3 3l18 18"/>
    </svg>
  );
}

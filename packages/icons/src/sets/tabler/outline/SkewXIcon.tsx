import type { IconProps } from "../../../shared/types";

export function SkewXIcon({
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
      <path d="M4 5.205v13.59a1 1 0 0 0 1.184.983l14-2.625A1 1 0 0 0 20 16.17V7.83a1 1 0 0 0-.816-.983l-14-2.625A1 1 0 0 0 4 5.205"/>
    </svg>
  );
}

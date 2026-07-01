import type { IconProps } from "../../../shared/types";

export function BedFlatIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M5 8a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 5 8m13-1a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm3 8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"/>
    </svg>
  );
}

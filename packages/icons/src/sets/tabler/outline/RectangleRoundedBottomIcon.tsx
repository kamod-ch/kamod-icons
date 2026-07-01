import type { IconProps } from "../../../shared/types";

export function RectangleRoundedBottomIcon({
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
      <path d="M9 18h6a6 6 0 0 0 6-6V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a6 6 0 0 0 6 6"/>
    </svg>
  );
}

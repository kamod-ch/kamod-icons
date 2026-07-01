import type { IconProps } from "../../../shared/types";

export function ArrowDownSquareIcon({
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
      <path d="M12 7v14m-3-3 3 3 3-3M14 3v4h-4V3z"/>
    </svg>
  );
}

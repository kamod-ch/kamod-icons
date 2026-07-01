import type { IconProps } from "../../../shared/types";

export function ArrowBackIcon({
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
      <path d="m9 11-4 4 4 4m-4-4h11a4 4 0 0 0 0-8h-1"/>
    </svg>
  );
}

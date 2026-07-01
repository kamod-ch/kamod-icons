import type { IconProps } from "../../../shared/types";

export function ArrowsMoveVerticalIcon({
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
      <path d="m9 18 3 3 3-3m-3-3v6m3-15-3-3-3 3m3-3v6"/>
    </svg>
  );
}

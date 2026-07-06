import type { IconProps } from "../../shared/types";

export function MirrorRoundIcon({
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
      <path d="M10 6.6 8.6 8M12 18v4m3-14.5L9.5 13M7 22h10"/><circle cx="12" cy="10" r="8"/>
    </svg>
  );
}

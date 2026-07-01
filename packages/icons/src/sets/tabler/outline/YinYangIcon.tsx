import type { IconProps } from "../../../shared/types";

export function YinYangIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M12 3a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9"/><path fill="currentColor" d="M11.5 7.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m0 9a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/>
    </svg>
  );
}

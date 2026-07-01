import type { IconProps } from "../../../shared/types";

export function Ruler2OffIcon({
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
      <path d="M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7m6-3-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18"/>
    </svg>
  );
}

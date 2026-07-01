import type { IconProps } from "../../../shared/types";

export function SwordOffIcon({
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
      <path d="M11.938 7.937 15 4h5v5l-3.928 3.055m-2.259 1.757L11 16l-4 4-3-3 4-4 2.19-2.815M6.5 11.5l6 6M3 3l18 18"/>
    </svg>
  );
}

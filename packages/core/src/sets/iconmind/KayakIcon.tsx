import type { IconProps } from "../../shared/types";

export function KayakIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 15c4-2 14-2 18 0-4 5-14 5-18 0m3-7h12M3 5h3v6H3Zm18 0h-3v6h3Z"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function ForkKnifeIcon({
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
      <path d="M5 3v5m4-5v5M5 8h4M7 8v13m9-17 3 3v6h-3Zm1.5 9v8"/>
    </svg>
  );
}

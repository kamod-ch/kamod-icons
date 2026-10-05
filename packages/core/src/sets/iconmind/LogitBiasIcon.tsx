import type { IconProps } from "../../shared/types";

export function LogitBiasIcon({
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
      <path d="M6 6v13m6-8v8m6-13v13M4 21.5h16m-8-19V5M9.5 6 12 8.5 14.5 6"/>
    </svg>
  );
}

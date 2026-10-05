import type { IconProps } from "../../shared/types";

export function TacoIcon({
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
      <path d="M4 11c0 5 3 8 8 8s8-3 8-8Zm1 0c2-3 4-1 7-3s5 1 7 3"/>
    </svg>
  );
}

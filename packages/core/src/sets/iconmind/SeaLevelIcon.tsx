import type { IconProps } from "../../shared/types";

export function SeaLevelIcon({
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
      <path d="M6 3v18M4 3h4M4 9h4m1 6 3-3 3 3 3-3 3 3M9 20l3-3 3 3 3-3 3 3"/>
    </svg>
  );
}

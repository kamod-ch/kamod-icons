import type { IconProps } from "../../../shared/types";

export function ArrowBarToLeftDashedIcon({
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
      <path d="M10 12h10m-10 0 4-4m-4 4 4 4M4 20v-3M4 4v3m0 3.5v3"/>
    </svg>
  );
}

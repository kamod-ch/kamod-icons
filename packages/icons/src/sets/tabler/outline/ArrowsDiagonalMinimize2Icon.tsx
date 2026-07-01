import type { IconProps } from "../../../shared/types";

export function ArrowsDiagonalMinimize2Icon({
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
      <path d="M18 10h-4V6m6-2-6 6m-8 4h4v4m0-4-6 6"/>
    </svg>
  );
}

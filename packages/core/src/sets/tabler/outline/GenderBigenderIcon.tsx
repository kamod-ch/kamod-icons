import type { IconProps } from "../../../shared/types";

export function GenderBigenderIcon({
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
      <path d="M7 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0m12-8-5 5m1-5h4v4m-8 9v6m-3-3h6"/>
    </svg>
  );
}

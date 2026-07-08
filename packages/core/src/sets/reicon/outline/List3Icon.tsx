import type { IconProps } from "../../../shared/types";

export function List3Icon({
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
      <path fill="currentColor" d="M2 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 .25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5zm0 7a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5zM6.25 19a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM1 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
    </svg>
  );
}

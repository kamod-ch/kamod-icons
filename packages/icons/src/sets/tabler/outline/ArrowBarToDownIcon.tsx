import type { IconProps } from "../../../shared/types";

export function ArrowBarToDownIcon({
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
      <path d="M4 20h16m-8-6V4m0 10 4-4m-4 4-4-4"/>
    </svg>
  );
}

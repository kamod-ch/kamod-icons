import type { IconProps } from "../../../shared/types";

export function UTurnRightIcon({
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
      <path d="M7 20V8.5a4.5 4.5 0 0 1 9 0V17"/><path d="m13 14 3 3 3-3"/>
    </svg>
  );
}

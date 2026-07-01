import type { IconProps } from "../../../shared/types";

export function CornerDownLeftDoubleIcon({
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
      <path d="M19 5v6a3 3 0 0 1-3 3H9"/><path d="m13 10-4 4 4 4m-5-8-4 4 4 4"/>
    </svg>
  );
}

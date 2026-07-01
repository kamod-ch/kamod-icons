import type { IconProps } from "../../../shared/types";

export function CornerDownRightDoubleIcon({
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
      <path d="M4 5v6a3 3 0 0 0 3 3h7"/><path d="m10 10 4 4-4 4m5-8 4 4-4 4"/>
    </svg>
  );
}

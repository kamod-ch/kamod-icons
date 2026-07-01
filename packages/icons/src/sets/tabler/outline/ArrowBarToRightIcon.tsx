import type { IconProps } from "../../../shared/types";

export function ArrowBarToRightIcon({
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
      <path d="M14 12H4m10 0-4 4m4-4-4-4m10-4v16"/>
    </svg>
  );
}

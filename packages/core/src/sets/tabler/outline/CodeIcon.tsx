import type { IconProps } from "../../../shared/types";

export function CodeIcon({
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
      <path d="m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16"/>
    </svg>
  );
}

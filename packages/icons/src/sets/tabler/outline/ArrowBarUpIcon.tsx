import type { IconProps } from "../../../shared/types";

export function ArrowBarUpIcon({
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
      <path d="M12 4v10m0-10 4 4m-4-4L8 8M4 20h16"/>
    </svg>
  );
}

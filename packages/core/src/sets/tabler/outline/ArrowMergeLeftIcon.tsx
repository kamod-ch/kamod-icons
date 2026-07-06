import type { IconProps } from "../../../shared/types";

export function ArrowMergeLeftIcon({
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
      <path d="m8 8 4-4 4 4m-4 12V4M6 18q6-2 6-10"/>
    </svg>
  );
}

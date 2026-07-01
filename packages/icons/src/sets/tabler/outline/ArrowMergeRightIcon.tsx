import type { IconProps } from "../../../shared/types";

export function ArrowMergeRightIcon({
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
      <path d="m16 8-4-4-4 4m4 12V4m6 14q-6-2-6-10"/>
    </svg>
  );
}

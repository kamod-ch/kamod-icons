import type { IconProps } from "../../../shared/types";

export function ArrowsDiffIcon({
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
      <path d="M11 16h10m-10 0 4 4m-4-4 4-4m-2-4H3m10 0-4 4m4-4L9 4"/>
    </svg>
  );
}

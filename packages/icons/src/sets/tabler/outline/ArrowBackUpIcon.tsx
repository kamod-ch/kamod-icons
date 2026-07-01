import type { IconProps } from "../../../shared/types";

export function ArrowBackUpIcon({
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
      <path d="m9 14-4-4 4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>
    </svg>
  );
}

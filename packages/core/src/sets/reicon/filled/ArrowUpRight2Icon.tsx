import type { IconProps } from "../../../shared/types";

export function ArrowUpRight2Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M19 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7.414L5.707 19.707a1 1 0 0 1-1.414-1.414L16.586 6H11a1 1 0 1 1 0-2z"/>
    </svg>
  );
}

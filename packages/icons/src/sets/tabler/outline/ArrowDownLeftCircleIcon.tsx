import type { IconProps } from "../../../shared/types";

export function ArrowDownLeftCircleIcon({
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
      <path d="M15.536 8.464 6 18m0-4v4h4m5.586-9.586a2 2 0 1 0 2.828-2.828 2 2 0 0 0-2.828 2.828"/>
    </svg>
  );
}

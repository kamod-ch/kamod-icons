import type { IconProps } from "../../../shared/types";

export function ArrowUpLeftCircleIcon({
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
      <path d="M15.536 15.536 6 6m4 0H6v4m9.586 5.586a2 2 0 1 0 2.828 2.828 2 2 0 0 0-2.828-2.828"/>
    </svg>
  );
}

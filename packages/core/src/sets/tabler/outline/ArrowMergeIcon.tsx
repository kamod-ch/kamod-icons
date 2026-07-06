import type { IconProps } from "../../../shared/types";

export function ArrowMergeIcon({
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
      <path d="m8 7 4-4 4 4"/><path d="M12 3v5.394A6.74 6.74 0 0 1 9 14a6.74 6.74 0 0 0-3 5.606V21m6-18v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21"/>
    </svg>
  );
}

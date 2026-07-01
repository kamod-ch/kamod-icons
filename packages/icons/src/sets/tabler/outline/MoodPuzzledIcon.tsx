import type { IconProps } from "../../../shared/types";

export function MoodPuzzledIcon({
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
      <path d="M14.986 3.51A9 9 0 1 0 16.5 19.794c2.489-1.437 4.181-3.978 4.5-6.794m-11-3h.01M14 8h.01"/><path d="M12 15q1.5-2 3-2m5-4v.01M20 6a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483"/>
    </svg>
  );
}

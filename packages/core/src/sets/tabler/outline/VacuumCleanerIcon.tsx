import type { IconProps } from "../../../shared/types";

export function VacuumCleanerIcon({
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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/><path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 7h.01"/>
    </svg>
  );
}

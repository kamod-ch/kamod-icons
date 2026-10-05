import type { IconProps } from "../../shared/types";

export function TaskSplitIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5 2.5 2.5 0 0 1 18.5 8h-13A2.5 2.5 0 0 1 3 5.5M7 8v6m10-6v6M3 16.5A2.5 2.5 0 0 1 5.5 14h3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 19h-3A2.5 2.5 0 0 1 3 16.5m10 0a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function MilestoneUpIcon({
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
      <path d="M4 3v18M4 4h16v12H4"/><path d="m10 9.5 2-2 2 2m-4 3 2-2 2 2"/>
    </svg>
  );
}

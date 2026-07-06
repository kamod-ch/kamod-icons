import type { IconProps } from "../../shared/types";

export function GitBranchMinusIcon({
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
      <path d="M15 6a9 9 0 0 0-9 9V3m15 15h-6"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    </svg>
  );
}

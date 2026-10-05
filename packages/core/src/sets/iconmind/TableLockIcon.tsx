import type { IconProps } from "../../shared/types";

export function TableLockIcon({
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
      <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm0 2.5h20M7 18a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3m1.5-3a3.5 3.5 0 0 1 7 0"/>
    </svg>
  );
}

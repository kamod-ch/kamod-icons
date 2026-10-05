import type { IconProps } from "../../shared/types";

export function CompostIcon({
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
      <path d="M3 20a9 9 0 0 1 18 0M3 20h18M12 9v6"/><path d="M6 12c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6m6 0c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6"/>
    </svg>
  );
}

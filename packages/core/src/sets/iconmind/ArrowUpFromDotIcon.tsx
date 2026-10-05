import type { IconProps } from "../../shared/types";

export function ArrowUpFromDotIcon({
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
      <path d="M10 18.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 4v10M8 8l4-4 4 4"/>
    </svg>
  );
}

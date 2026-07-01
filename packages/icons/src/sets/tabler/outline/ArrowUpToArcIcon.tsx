import type { IconProps } from "../../../shared/types";

export function ArrowUpToArcIcon({
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
      <path d="M12 21V9m-4 4 4-4 4 4"/><path d="M21 12a9 9 0 0 0-18 0"/>
    </svg>
  );
}

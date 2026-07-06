import type { IconProps } from "../../../shared/types";

export function HierarchyOffIcon({
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
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14.585-1.413a2 2 0 0 0 2.813 2.843"/><path d="M6.5 17.5 12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18"/>
    </svg>
  );
}

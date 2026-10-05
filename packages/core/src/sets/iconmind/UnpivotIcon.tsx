import type { IconProps } from "../../shared/types";

export function UnpivotIcon({
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
      <path d="M6 2v5.5M12 2v5.5M18 2v5.5m-8.5 3L12 13l2.5-2.5M3 16h18M3 20h18"/>
    </svg>
  );
}

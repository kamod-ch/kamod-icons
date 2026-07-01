import type { IconProps } from "../../../shared/types";

export function AdjustmentsCheckIcon({
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
      <path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.823-4.824a2 2 0 1 0-2.638 2.651M12 4v10m4-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v5m-3 5 2 2 4-4"/>
    </svg>
  );
}

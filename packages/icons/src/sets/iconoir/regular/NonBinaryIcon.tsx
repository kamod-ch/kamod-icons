import type { IconProps } from "../../../shared/types";

export function NonBinaryIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 9a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 0V3M9 4l6 3m0-3L9 7"/>
    </svg>
  );
}

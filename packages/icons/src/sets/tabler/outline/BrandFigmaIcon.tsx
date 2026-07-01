import type { IconProps } from "../../../shared/types";

export function BrandFigmaIcon({
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
      <path d="M12 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1-3 3H9a3 3 0 0 1-3-3"/><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3"/>
    </svg>
  );
}

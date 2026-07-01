import type { IconProps } from "../../../shared/types";

export function SparkleHighlightIcon({
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
      <path d="M14.504 8.522 12.746 4.49a.814.814 0 0 0-1.492 0L9.495 8.522c-.19.436-.537.784-.973.973L4.49 11.254a.814.814 0 0 0 0 1.492l4.033 1.758c.436.19.784.538.973.974l1.759 4.033a.814.814 0 0 0 1.492 0l1.758-4.033c.19-.436.538-.784.974-.974l4.033-1.758a.814.814 0 0 0 0-1.492l-4.033-1.759a1.88 1.88 0 0 1-.974-.973M3 3l2 2m16-2-2 2M3 21l2-2m16 2-2-2"/>
    </svg>
  );
}

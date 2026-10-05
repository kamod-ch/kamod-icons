import type { IconProps } from "../../shared/types";

export function ContextRelevanceIcon({
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
      <path d="M12.62 3.5a7 7 0 1 1-5.24 0M15 15l6 6"/><path d="M8.5 7H6v6h2.5m3-6H14v6h-2.5"/>
    </svg>
  );
}

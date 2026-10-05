import type { IconProps } from "../../shared/types";

export function SemanticSearchIcon({
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
      <path d="m15 15 6 6M10 7l3 3-3 3-3-3Z"/><path d="M12.62 3.5a7 7 0 1 1-5.24 0"/>
    </svg>
  );
}

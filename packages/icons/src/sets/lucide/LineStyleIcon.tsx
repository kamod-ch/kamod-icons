import type { IconProps } from "../../shared/types";

export function LineStyleIcon({
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
      <path d="M11 5h2m2 7h6m-2-7h2M3 12h6m-6 7h18M3 5h2"/>
    </svg>
  );
}

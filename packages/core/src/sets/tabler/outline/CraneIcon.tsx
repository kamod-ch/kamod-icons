import type { IconProps } from "../../../shared/types";

export function CraneIcon({
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
      <path d="M6 21h6m-3 0V3L3 9h18M9 3l10 6"/><path d="M17 9v4a2 2 0 1 1-2 2"/>
    </svg>
  );
}

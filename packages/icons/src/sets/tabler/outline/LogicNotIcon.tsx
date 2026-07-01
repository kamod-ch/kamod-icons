import type { IconProps } from "../../../shared/types";

export function LogicNotIcon({
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
      <path d="M22 12h-3M2 9h3m-3 6h3M5 5l10 7-10 7zm10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

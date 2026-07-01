import type { IconProps } from "../../../shared/types";

export function WorldMapIcon({
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
      <path d="M20 8h-2a2 2 0 0 0-2 2 2 2 0 1 1-4 0V9a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2v-.5M3 12h3a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 0 9.5 16a1.5 1.5 0 0 1 1.5 1.5v3.25m4-.25V17a2 2 0 0 1 2-2h3.5"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
    </svg>
  );
}

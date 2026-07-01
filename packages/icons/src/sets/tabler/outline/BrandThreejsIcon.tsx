import type { IconProps } from "../../../shared/types";

export function BrandThreejsIcon({
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
      <path d="M8 22 3 3l19 5.5z"/><path d="m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64"/><path d="M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z"/>
    </svg>
  );
}

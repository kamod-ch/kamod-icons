import type { IconProps } from "../../../shared/types";

export function ArrowLeftRhombusIcon({
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
      <path d="M16 12H3m3-3-3 3 3 3m12.5-5.5L21 12l-2.5 2.5L16 12z"/>
    </svg>
  );
}

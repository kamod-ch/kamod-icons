import type { IconProps } from "../../../shared/types";

export function ComponentsOffIcon({
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
      <path d="m3 12 3 3 3-3-3-3zm15.5 2.5L21 12l-3-3-2.5 2.5m-3.001-2.999L15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3zM3 3l18 18"/>
    </svg>
  );
}

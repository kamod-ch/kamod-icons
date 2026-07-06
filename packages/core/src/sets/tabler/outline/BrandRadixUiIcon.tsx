import type { IconProps } from "../../../shared/types";

export function BrandRadixUiIcon({
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
      <path d="M14 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M6 3h5v5H6zm5 8v10a5 5 0 0 1-.217-9.995z"/>
    </svg>
  );
}

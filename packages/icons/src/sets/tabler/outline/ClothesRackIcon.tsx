import type { IconProps } from "../../../shared/types";

export function ClothesRackIcon({
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
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v14m-3 0h6M7.757 9.243a6 6 0 0 0 8.486 0"/>
    </svg>
  );
}

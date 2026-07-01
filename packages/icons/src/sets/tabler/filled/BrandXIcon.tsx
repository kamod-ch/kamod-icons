import type { IconProps } from "../../../shared/types";

export function BrandXIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8.267 3a1 1 0 0 1 .73.317l.076.092 4.274 5.828 5.946-5.944a1 1 0 0 1 1.497 1.32l-.083.094-6.163 6.162 6.262 8.54a1 1 0 0 1-.697 1.585L20 21h-4.267a1 1 0 0 1-.73-.317l-.076-.092-4.276-5.829-5.944 5.945a1 1 0 0 1-1.497-1.32l.083-.094 6.161-6.163-6.26-8.539a1 1 0 0 1 .697-1.585L4 3z"/>
    </svg>
  );
}

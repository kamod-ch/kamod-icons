import type { IconProps } from "../../../shared/types";

export function ChevronDownIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12 18a1 1 0 0 1-.707-.293L2.96 9.373A1 1 0 1 1 4.375 7.96L12 15.585l7.627-7.626a1 1 0 1 1 1.415 1.414l-8.334 8.334a1 1 0 0 1-.706.293Z"/>
    </svg>
  );
}

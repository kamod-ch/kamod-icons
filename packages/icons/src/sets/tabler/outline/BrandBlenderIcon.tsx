import type { IconProps } from "../../../shared/types";

export function BrandBlenderIcon({
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
      <path d="M9 14a6 5 0 1 0 12 0 6 5 0 1 0-12 0"/><path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 16l9-6.5M6 9h9m-2-4 5.65 5"/>
    </svg>
  );
}

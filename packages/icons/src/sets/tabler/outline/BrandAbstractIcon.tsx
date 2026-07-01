import type { IconProps } from "../../../shared/types";

export function BrandAbstractIcon({
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
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"/><path d="M8 13.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0"/><path d="M8 8h8v8"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function BrandCodepenIcon({
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
      <path d="m3 15 9 6 9-6-9-6z"/><path d="m3 9 9 6 9-6-9-6zm0 0v6m18-6v6M12 3v6m0 6v6"/>
    </svg>
  );
}

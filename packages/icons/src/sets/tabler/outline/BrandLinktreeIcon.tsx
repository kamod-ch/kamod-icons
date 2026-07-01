import type { IconProps } from "../../../shared/types";

export function BrandLinktreeIcon({
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
      <path d="M4 10h16M6.5 4.5l11 11m-11 0 11-11M12 10V2m0 13v7"/>
    </svg>
  );
}

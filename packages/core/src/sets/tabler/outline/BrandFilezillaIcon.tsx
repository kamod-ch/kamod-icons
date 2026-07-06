import type { IconProps } from "../../../shared/types";

export function BrandFilezillaIcon({
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
      <path d="M16 15.824a4.06 4.06 0 0 1-2.25.033c-.738-.201-2.018-.08-2.75.143l4.583-5H9"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="m8 15 2-8h5"/>
    </svg>
  );
}

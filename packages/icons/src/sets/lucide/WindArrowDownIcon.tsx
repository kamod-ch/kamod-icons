import type { IconProps } from "../../shared/types";

export function WindArrowDownIcon({
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
      <path d="M10 2v8m2.8 11.6A2 2 0 1 0 14 18H2m15.5-8a2.5 2.5 0 1 1 2 4H2m4-8 4 4 4-4"/>
    </svg>
  );
}

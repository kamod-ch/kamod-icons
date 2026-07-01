import type { IconProps } from "../../shared/types";

export function FlipHorizontal2Icon({
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
      <path d="m3 7 5 5-5 5zm18 0-5 5 5 5zm-9 13v2m0-8v2m0-8v2m0-8v2"/>
    </svg>
  );
}

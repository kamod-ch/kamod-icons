import type { IconProps } from "../../shared/types";

export function AudioLinesIcon({
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
      <path d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3"/>
    </svg>
  );
}

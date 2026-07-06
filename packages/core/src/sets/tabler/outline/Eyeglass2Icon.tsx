import type { IconProps } from "../../../shared/types";

export function Eyeglass2Icon({
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
      <path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4"/><path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-11 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/>
    </svg>
  );
}

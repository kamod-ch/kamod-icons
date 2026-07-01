import type { IconProps } from "../../../shared/types";

export function LogicXnorIcon({
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
      <path d="M22 12h-2M2 9h4m-4 6h4m-1 4q2.667-7 0-14m3 0c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14"/><path d="M16 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function LogicNandIcon({
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
      <path d="M22 12h-3M2 9h3m-3 6h3M7 5c6 0 8 3.5 8 7s-2 7-8 7H5V5zm8 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

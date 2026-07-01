import type { IconProps } from "../../shared/types";

export function VariableIcon({
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
      <path d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9M15 9l-6 6m0-6 6 6"/>
    </svg>
  );
}

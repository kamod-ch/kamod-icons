import type { IconProps } from "../../../shared/types";

export function SwitchVerticalIcon({
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
      <path d="m3 8 4-4 4 4M7 4v9m6 3 4 4 4-4m-4-6v10"/>
    </svg>
  );
}

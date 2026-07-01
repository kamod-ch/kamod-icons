import type { IconProps } from "../../shared/types";

export function RockingChairIcon({
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
      <path d="m15 13 3.708 7.416M3 19a15 15 0 0 0 18 0M3 2l3.21 9.633A2 2 0 0 0 8.109 13H18m-9 0-3.708 7.416"/>
    </svg>
  );
}

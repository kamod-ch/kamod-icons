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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3.5 2 3 10.5H18m-8.5 0-4 7.5m9.5-7.5 3.5 7.5M2.75 18a13 13 0 0 0 18.5 0"/>
    </svg>
  );
}

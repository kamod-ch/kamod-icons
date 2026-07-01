import type { IconProps } from "../../../shared/types";

export function Leaf2Icon({
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
      <path d="M5 21c.5-4.5 2.5-8 7-10"/><path d="M7.5 15Q4 15 3 9a8.4 8.4 0 0 1 3.438.402 12 12 0 0 1-.052-.793C6.386 5.003 9.59 3 9.59 3s2.003 1.252 2.842 3.557Q15 5 19 5q.396 3.775-1.557 6.568C19.748 12.407 21 14.41 21 14.41S18 17 14 17c0 1 0 1 .5 3q-6 0-7-5"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function StackPerspectiveIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M3.001 17.741a1.67 1.67 0 0 1-1.668-1.666v-8.15a1.67 1.67 0 0 1 2.194-1.581l1.122.375a1 1 0 0 1-.633 1.897l-.684-.228v7.225l.684-.228a1 1 0 1 1 .633 1.898l-1.122.374c-.171.058-.35.086-.526.086Zm5.332 2.592a1.667 1.667 0 0 1-1.665-1.666V5.333a1.663 1.663 0 0 1 2.307-1.538l1.077.448a1.001 1.001 0 0 1-.77 1.846l-.614-.256v12.334l.615-.256a1 1 0 0 1 .769 1.846l-1.077.448a1.7 1.7 0 0 1-.642.128ZM21.31 4.735l-6.945-3.207A1.666 1.666 0 0 0 12 3.041V20.96c0 .57.287 1.096.768 1.404a1.66 1.66 0 0 0 1.597.109l6.946-3.205a2.34 2.34 0 0 0 1.356-2.119V6.853a2.34 2.34 0 0 0-1.356-2.118Z"/>
    </svg>
  );
}

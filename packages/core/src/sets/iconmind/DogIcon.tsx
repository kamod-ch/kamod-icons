import type { IconProps } from "../../shared/types";

export function DogIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M7 6c1-1 3-1 5-1s4 0 5 1c.5 2 .5 5 0 7 0 4-2 6-5 6s-5-2-5-6c-.5-2-.5-5 0-7"/><path d="M7 7c-1.5 0-2.5 2-2.5 5 0 2 1 3 2.5 2Zm10 0c1.5 0 2.5 2 2.5 5 0 2-1 3-2.5 2Zm-6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}

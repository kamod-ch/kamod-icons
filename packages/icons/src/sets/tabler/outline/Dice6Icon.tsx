import type { IconProps } from "../../../shared/types";

export function Dice6Icon({
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
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path fill="currentColor" d="M8 7.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m7 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0M8 12a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m7 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m0 4.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m-7 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/>
    </svg>
  );
}

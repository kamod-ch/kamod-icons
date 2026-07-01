import type { IconProps } from "../../../shared/types";

export function Puzzle2Icon({
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
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M12 4v2.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5V12m0 0v1.5a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5V20m8-8h-2.5a.5.5 0 0 1-.5-.5 1.5 1.5 0 0 0-3 0 .5.5 0 0 1-.5.5H12m0 0h-1.5a.5.5 0 0 0-.5.5 1.5 1.5 0 0 1-3 0 .5.5 0 0 0-.5-.5H4"/>
    </svg>
  );
}

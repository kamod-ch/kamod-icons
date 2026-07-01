import type { IconProps } from "../../../shared/types";

export function Columns2Icon({
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
      <path d="M4 2h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m10 0h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"/>
    </svg>
  );
}

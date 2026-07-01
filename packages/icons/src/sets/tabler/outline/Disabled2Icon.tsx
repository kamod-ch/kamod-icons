import type { IconProps } from "../../../shared/types";

export function Disabled2Icon({
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
      <path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6 5a5 5 0 1 0 3.95 7.95"/><path d="m19 20-4-5h-4l3-5-4-3-4 1"/>
    </svg>
  );
}

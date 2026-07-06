import type { IconProps } from "../../../shared/types";

export function LockOpen2Icon({
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
      <path d="M3 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4-5V7a4 4 0 1 1 8 0v4"/>
    </svg>
  );
}

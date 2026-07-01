import type { IconProps } from "../../../shared/types";

export function GrainIcon({
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
      <path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10-10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}

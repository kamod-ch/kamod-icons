import type { IconProps } from "../../../shared/types";

export function Radar2Icon({
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
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M15.51 15.56A5 5 0 1 0 12 17"/><path d="M18.832 17.86A9 9 0 1 0 12 21m0-9v9"/>
    </svg>
  );
}

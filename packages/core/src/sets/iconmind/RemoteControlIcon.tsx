import type { IconProps } from "../../shared/types";

export function RemoteControlIcon({
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
      <path d="M7 2v20h10V2Z"/><path d="M11 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-2 4h5m-5 3h5"/>
    </svg>
  );
}

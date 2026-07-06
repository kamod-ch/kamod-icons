import type { IconProps } from "../../../shared/types";

export function Devices2Icon({
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
      <path d="M10 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6m3 0a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zM7 19h3m7-11v.01"/><path d="M16 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-7-1v4"/>
    </svg>
  );
}

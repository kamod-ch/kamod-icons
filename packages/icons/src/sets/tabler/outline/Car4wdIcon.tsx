import type { IconProps } from "../../../shared/types";

export function Car4wdIcon({
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
      <path d="M5 5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm0 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM15 5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm0 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm-6 1h6M9 6h6m-3 .5V6v12"/>
    </svg>
  );
}

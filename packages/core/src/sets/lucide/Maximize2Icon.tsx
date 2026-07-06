import type { IconProps } from "../../shared/types";

export function Maximize2Icon({
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
      <path d="M15 3h6v6m0-6-7 7M3 21l7-7m-1 7H3v-6"/>
    </svg>
  );
}

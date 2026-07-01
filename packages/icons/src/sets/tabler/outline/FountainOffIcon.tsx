import type { IconProps } from "../../../shared/types";

export function FountainOffIcon({
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
      <path d="M9 16v-5a2 2 0 1 0-4 0m10 5v-1m0-4a2 2 0 1 1 4 0m-7 5v-4m0-4V6a3 3 0 0 1 6 0"/><path d="M7.451 3.43A3 3 0 0 1 12 6m8 10h1v1m-.871 3.114A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18"/>
    </svg>
  );
}

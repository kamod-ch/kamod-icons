import type { IconProps } from "../../../shared/types";

export function TicTacIcon({
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
      <path d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6h18m-9-9v18m-8-5 4 4m-4 0 4-4m8-12 4 4m-4 0 4-4m-4 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

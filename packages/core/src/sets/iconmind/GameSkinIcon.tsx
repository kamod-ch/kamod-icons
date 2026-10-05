import type { IconProps } from "../../shared/types";

export function GameSkinIcon({
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
      <path d="m3 9 5-5h8l5 5-4 4v7H7v-7Z"/><path d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

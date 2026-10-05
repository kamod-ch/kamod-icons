import type { IconProps } from "../../shared/types";

export function JigsawIcon({
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
      <path d="M3 3h7c0-1.5 4-1.5 4 0v7c1.5 0 1.5 4 0 4v7H3Zm14 0h4v18h-4v-7c1.5 0 1.5-4 0-4Z"/>
    </svg>
  );
}

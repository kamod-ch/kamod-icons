import type { IconProps } from "../../shared/types";

export function RecipeBookIcon({
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
      <path d="M4 3v18h16V3Zm4 0v18"/><path d="M11 10h6c0 2.5-1.5 4-3 4s-3-1.5-3-4"/>
    </svg>
  );
}

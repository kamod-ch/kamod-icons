import type { IconProps } from "../../../shared/types";

export function MathTgIcon({
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
      <path d="M7 8h4M9 8v8m9-8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1"/>
    </svg>
  );
}

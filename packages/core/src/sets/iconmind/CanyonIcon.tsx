import type { IconProps } from "../../shared/types";

export function CanyonIcon({
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
      <path d="M2 3h6v18M22 3h-6v18m-8-4 2-2 2 2 2-2 2 2M2 21h20"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function DiplomaIcon({
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
      <path d="M4 8a3 3 0 0 0 0 6h16a3 3 0 0 0 0-6Zm6 6v6l2-2 2 2v-6"/>
    </svg>
  );
}

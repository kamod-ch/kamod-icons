import type { IconProps } from "../../shared/types";

export function PaediatricianIcon({
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
      <path d="M4 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1.5 9a4.5 4.5 0 0 1 9 0m3.5-4a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M13.5 18a3.5 3.5 0 0 1 7 0M17 2v6m-3-3h6"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function VectorUpsertIcon({
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
      <path d="M5 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-3 6.5A2.5 2.5 0 0 1 4.5 17h15a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5M18 4v6m-3-3 3 3 3-3"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function GraphqlNodeIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-9v6m-2.5 5.5L5 19m9.5-4.5L19 19"/>
    </svg>
  );
}

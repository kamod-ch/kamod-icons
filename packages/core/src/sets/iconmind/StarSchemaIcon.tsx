import type { IconProps } from "../../shared/types";

export function StarSchemaIcon({
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
      <path d="M8 11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm2-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8-8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m16 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

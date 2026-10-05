import type { IconProps } from "../../shared/types";

export function SchemaDiffIcon({
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
      <path d="M2 6a2 2 0 0 1 2-2h4.5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm0 3h8.5m3-3a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2Zm0 3H22"/><path d="M15.5 14.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

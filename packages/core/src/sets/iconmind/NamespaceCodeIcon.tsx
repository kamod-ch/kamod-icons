import type { IconProps } from "../../shared/types";

export function NamespaceCodeIcon({
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
      <path d="M8 4H4v16h4m3-12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-12h4v16h-4"/>
    </svg>
  );
}

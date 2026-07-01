import type { IconProps } from "../../../shared/types";

export function GitCompareIcon({
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
      <path d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M11 6h5a2 2 0 0 1 2 2v8"/><path d="m14 9-3-3 3-3m-1 15H8a2 2 0 0 1-2-2V8"/><path d="m10 15 3 3-3 3"/>
    </svg>
  );
}

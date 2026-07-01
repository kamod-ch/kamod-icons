import type { IconProps } from "../../../shared/types";

export function NotebookOffIcon({
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
      <path d="M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828A2 2 0 0 1 17 20H6a1 1 0 0 1-1-1V5m4-1v1m0 4v13m4-14h2M3 3l18 18"/>
    </svg>
  );
}

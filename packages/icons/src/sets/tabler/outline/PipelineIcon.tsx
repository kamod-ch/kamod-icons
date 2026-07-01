import type { IconProps } from "../../../shared/types";

export function PipelineIcon({
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
      <path d="M3 4h8M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5m-7 0h8M12 9v6"/>
    </svg>
  );
}

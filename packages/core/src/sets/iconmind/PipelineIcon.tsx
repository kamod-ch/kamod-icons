import type { IconProps } from "../../shared/types";

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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4m4 0h6"/><path d="M12.5 9.5 15 12l-2.5 2.5"/>
    </svg>
  );
}

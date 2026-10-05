import type { IconProps } from "../../shared/types";

export function FailureTaxonomyIcon({
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
      <path d="M4 7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M9.5 7V2.5h5V7M11 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 1L8.5 14m4.5-2.5 2.5 2.5"/>
    </svg>
  );
}

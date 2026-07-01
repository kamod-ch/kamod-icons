import type { IconProps } from "../../../shared/types";

export function GitBranchIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-4V3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 18h1c3.5 0 9-2.1 9-8.5V8"/>
    </svg>
  );
}

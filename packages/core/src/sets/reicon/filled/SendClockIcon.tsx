import type { IconProps } from "../../../shared/types";

export function SendClockIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M6.107.6C3.235-.817.332 2.22 1.53 5.082l.006.015 2.273 5.11.004.01H11a.75.75 0 1 1 0 1.5H3.82l-.031.075-2.143 5.1c-1.26 2.872 1.635 5.945 4.538 4.497L9.41 19.78a.75.75 0 0 0 .408-.774 7.25 7.25 0 0 1 11.628-6.733.75.75 0 0 0 1.186-.402c.385-1.47-.183-3.214-1.777-4z"/><path fill="currentColor" fillRule="evenodd" d="M11.25 18a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Zm6.375-2.5a.625.625 0 1 0-1.25 0V18c0 .209.104.404.278.52l1.5 1a.625.625 0 0 0 .694-1.04l-1.222-.815z" clipRule="evenodd"/>
    </svg>
  );
}

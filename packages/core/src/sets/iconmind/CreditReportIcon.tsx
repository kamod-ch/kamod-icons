import type { IconProps } from "../../shared/types";

export function CreditReportIcon({
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
      <path d="M4 5h14l4 4v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m14 0v4h4"/><path d="M9 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2.5.5L15 15"/>
    </svg>
  );
}

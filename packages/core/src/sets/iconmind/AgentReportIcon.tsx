import type { IconProps } from "../../shared/types";

export function AgentReportIcon({
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
      <path d="M8.69 3.37a4 4 0 1 1-3.38 0M12 16a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m4.5-4.5V16m0 0H21"/>
    </svg>
  );
}

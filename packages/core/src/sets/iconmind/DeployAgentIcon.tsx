import type { IconProps } from "../../shared/types";

export function DeployAgentIcon({
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
      <path d="M10.11 9.47a5 5 0 1 1-4.22 0M18 8v11M15.5 8.5 18 6l2.5 2.5"/>
    </svg>
  );
}

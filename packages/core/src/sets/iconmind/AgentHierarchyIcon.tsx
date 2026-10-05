import type { IconProps } from "../../shared/types";

export function AgentHierarchyIcon({
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
      <path d="M13.27 2.28a3 3 0 1 1-2.54 0M12 8v4m-6 0h12M7.27 15.28a3 3 0 1 1-2.54 0m14.54 0a3 3 0 1 1-2.54 0M6 12v3m12-3v3"/>
    </svg>
  );
}

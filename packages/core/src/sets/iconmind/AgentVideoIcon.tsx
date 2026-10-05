import type { IconProps } from "../../shared/types";

export function AgentVideoIcon({
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
      <path d="M8.69 3.37a4 4 0 1 1-3.38 0M12.5 13.5a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z"/><path d="M15.5 14.5v4l2-2Z"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function AgentSpawnIcon({
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
      <path d="M13.9 2.92a4.5 4.5 0 1 1-3.8 0M12 11.5v3m1.5.33a3.5 3.5 0 1 1-2.96 0"/>
    </svg>
  );
}

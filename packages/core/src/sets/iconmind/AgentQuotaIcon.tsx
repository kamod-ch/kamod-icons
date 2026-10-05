import type { IconProps } from "../../shared/types";

export function AgentQuotaIcon({
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
      <path d="M6.27 9.28a3 3 0 1 1-2.54 0m11.54 0a3 3 0 1 1-2.54 0M20 7v10"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function EcosystemIcon({
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
      <path d="M2 18a10 10 0 0 1 20 0M2 18h20"/><path d="M6 11a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v4m5 0v-5h4"/>
    </svg>
  );
}

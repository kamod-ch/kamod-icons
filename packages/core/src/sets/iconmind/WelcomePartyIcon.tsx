import type { IconProps } from "../../shared/types";

export function WelcomePartyIcon({
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
      <path d="M6 20V4h10v16"/><path d="M12 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6 0h4m-2-2-2 2 2 2"/>
    </svg>
  );
}

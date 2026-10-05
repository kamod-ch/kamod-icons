import type { IconProps } from "../../shared/types";

export function MfaIcon({
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
      <path d="M2 10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm2-2a3 3 0 0 1 6 0m5-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2Zm2 12h3"/>
    </svg>
  );
}

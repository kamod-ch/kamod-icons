import type { IconProps } from "../../shared/types";

export function AtMentionIcon({
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
      <path d="M7 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M14.5 9v7"/><path d="M20.16 15.8a9 9 0 1 1 0-7.6"/>
    </svg>
  );
}

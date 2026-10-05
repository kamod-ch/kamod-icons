import type { IconProps } from "../../shared/types";

export function ContentCredentialIcon({
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
      <path d="M13 3H6v18h12V8"/><path d="M8 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="m9.5 11 2 2L15 9.5"/>
    </svg>
  );
}

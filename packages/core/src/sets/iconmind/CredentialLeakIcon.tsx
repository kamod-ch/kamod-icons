import type { IconProps } from "../../shared/types";

export function CredentialLeakIcon({
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
      <path d="M5 11.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2ZM8 7a4 4 0 0 1 8 0"/><path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v2.5m0-1.5h2.5"/>
    </svg>
  );
}

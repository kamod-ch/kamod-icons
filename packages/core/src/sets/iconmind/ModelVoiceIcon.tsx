import type { IconProps } from "../../shared/types";

export function ModelVoiceIcon({
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
      <path d="m8 8 4 4-4 4-4-4Zm9.12 1.88a3 3 0 0 1 0 4.24m2.12-6.36a6 6 0 0 1 0 8.5"/>
    </svg>
  );
}

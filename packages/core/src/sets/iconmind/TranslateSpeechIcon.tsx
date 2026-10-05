import type { IconProps } from "../../shared/types";

export function TranslateSpeechIcon({
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
      <path d="M5.88 14.12a3 3 0 0 1 0-4.24m-2.12 6.36a6 6 0 0 1 0-8.5M11.5 9.5 14 12l-2.5 2.5m6.62-4.62a3 3 0 0 1 0 4.24m2.12-6.36a6 6 0 0 1 0 8.5"/>
    </svg>
  );
}

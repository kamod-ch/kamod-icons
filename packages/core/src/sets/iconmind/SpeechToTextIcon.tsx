import type { IconProps } from "../../shared/types";

export function SpeechToTextIcon({
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
      <path d="M4 7a3 3 0 0 1 3-3 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3Z"/><path d="M11 13a4 4 0 0 1-8 0m11-4h7m-7 5h7m-7 5h4"/>
    </svg>
  );
}

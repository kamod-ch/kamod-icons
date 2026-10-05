import type { IconProps } from "../../shared/types";

export function TextToSpeechIcon({
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
      <path d="M2 9h8m-8 4h6m7.5-3.6a3 3 0 0 1 0 5.2"/><path d="M17 6.8a6 6 0 0 1 0 10.4"/>
    </svg>
  );
}

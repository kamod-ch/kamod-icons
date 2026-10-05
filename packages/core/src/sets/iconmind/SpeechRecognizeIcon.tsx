import type { IconProps } from "../../shared/types";

export function SpeechRecognizeIcon({
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
      <path d="M7.88 14.12a3 3 0 0 1 0-4.24m-2.83 7.07a7 7 0 0 1 0-9.9M16 10h5m-5 4h5"/>
    </svg>
  );
}

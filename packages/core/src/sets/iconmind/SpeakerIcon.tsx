import type { IconProps } from "../../shared/types";

export function SpeakerIcon({
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
      <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/><path d="M8 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m2-8a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function MoodSad2Icon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M14.5 16.05a3.5 3.5 0 0 0-5 0m.5-6.8c-.5 1-2.5 1-3 0m10 0c-.5 1-2.5 1-3 0"/>
    </svg>
  );
}

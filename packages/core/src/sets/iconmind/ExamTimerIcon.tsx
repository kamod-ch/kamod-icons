import type { IconProps } from "../../shared/types";

export function ExamTimerIcon({
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
      <path d="M6 3h12M6 21h12M6 3v3l6 6 6-6V3M6 21v-3l6-6 6 6v3"/>
    </svg>
  );
}

import type { IconProps } from "../../shared/types";

export function StepBackPromptIcon({
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
      <path d="M12.62 3.5a7 7 0 1 1-5.24 0M15 15l6 6"/><path d="M7.5 11 10 8.5l2.5 2.5M7 13.5h6"/>
    </svg>
  );
}

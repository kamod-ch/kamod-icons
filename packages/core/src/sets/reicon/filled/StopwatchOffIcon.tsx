import type { IconProps } from "../../../shared/types";

export function StopwatchOffIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M8.25 1.5A.75.75 0 0 1 9 .75h6a.75.75 0 0 1 0 1.5h-2.25v1.528a9.7 9.7 0 0 1 5.32 2.091l1.4-1.4a.75.75 0 0 1 1.06 1.061l-1.36 1.362a9.72 9.72 0 0 1 2.58 6.608 9.7 9.7 0 0 1-.552 3.24.75.75 0 0 1-1.237.281L8.479 5.54a.75.75 0 0 1 .28-1.237 9.7 9.7 0 0 1 2.491-.524V2.25H9a.75.75 0 0 1-.75-.75ZM6.956 5.895l.004.005L19.6 18.54l.005.004 2.925 2.926a.75.75 0 1 1-1.06 1.06l-2.36-2.359A9.73 9.73 0 0 1 12 23.25a9.75 9.75 0 0 1-9.75-9.75 9.73 9.73 0 0 1 3.08-7.11L1.47 2.53a.75.75 0 0 1 1.06-1.06z"/>
    </svg>
  );
}

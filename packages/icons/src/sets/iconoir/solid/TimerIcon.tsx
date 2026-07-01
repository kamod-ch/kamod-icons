import type { IconProps } from "../../../shared/types";

export function TimerIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 5.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m.75 4.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm-4.5-8A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 2" clipRule="evenodd"/>
    </svg>
  );
}

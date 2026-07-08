import type { IconProps } from "../../../shared/types";

export function Link6Icon({
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
      <path fill="currentColor" d="M9.97 7.03a.75.75 0 0 1 0-1.06l3.05-3.05a5.7 5.7 0 0 1 8.06 8.06l-3.05 3.05a.75.75 0 1 1-1.06-1.06l3.05-3.05a4.2 4.2 0 1 0-5.94-5.94l-3.05 3.05a.75.75 0 0 1-1.06 0Z"/><path fill="currentColor" d="M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z"/><path fill="currentColor" d="M14.03 18.03a.75.75 0 0 0-1.06-1.06l-3.05 3.05a4.2 4.2 0 0 1-5.94-5.94l3.05-3.05a.75.75 0 1 0-1.06-1.06l-3.05 3.05a5.7 5.7 0 0 0 8.06 8.06z"/>
    </svg>
  );
}

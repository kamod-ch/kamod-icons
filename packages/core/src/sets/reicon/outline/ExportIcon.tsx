import type { IconProps } from "../../../shared/types";

export function ExportIcon({
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
      <path fill="currentColor" d="M14.47 7.53a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V14a.75.75 0 0 0 1.5 0V5.81z"/><path fill="currentColor" d="M20.75 12a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0 .75.75 0 0 0-1.5 0 8.75 8.75 0 1 0 17.5 0Z"/>
    </svg>
  );
}

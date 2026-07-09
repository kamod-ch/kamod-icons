import type { IconProps } from "../../../shared/types";

export function LinkOffIcon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06L10.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 13.06l9.47 9.47a.75.75 0 1 0 1.06-1.06l-9.995-9.996-.005-.004-.004-.005zm17.49 2.51a4.2 4.2 0 0 0-5.94 0l-3.05 3.05a.75.75 0 1 1-1.06-1.06l3.05-3.05a5.7 5.7 0 1 1 8.06 8.06l-3.05 3.05a.75.75 0 1 1-1.06-1.06l3.05-3.05a4.2 4.2 0 0 0 0-5.94Z"/><path fill="currentColor" d="M15.53 8.47a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Zm-1.5 8.5a.75.75 0 0 1 0 1.06l-3.05 3.05a5.7 5.7 0 0 1-8.06-8.06l3.05-3.05a.75.75 0 0 1 1.06 1.06l-3.05 3.05a4.2 4.2 0 0 0 5.94 5.94l3.05-3.05a.75.75 0 0 1 1.06 0Z"/>
    </svg>
  );
}

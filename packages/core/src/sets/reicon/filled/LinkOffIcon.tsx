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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M2.707 1.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l9.293 9.293a1 1 0 0 0 1.414-1.414l-9.995-9.995-.005-.005-.005-.005zm17.136 2.864a3.95 3.95 0 0 0-5.586 0l-3.05 3.05a1 1 0 0 1-1.414-1.414l3.05-3.05a5.95 5.95 0 1 1 8.414 8.414l-3.05 3.05a1 1 0 0 1-1.414-1.414l3.05-3.05a3.95 3.95 0 0 0 0-5.586Z"/><path fill="currentColor" d="M15.707 8.293a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0Zm-1.5 8.5a1 1 0 0 1 0 1.414l-3.05 3.05a5.95 5.95 0 0 1-8.414-8.414l3.05-3.05a1 1 0 0 1 1.414 1.414l-3.05 3.05a3.95 3.95 0 0 0 5.586 5.586l3.05-3.05a1 1 0 0 1 1.414 0Z"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function TimeBackIcon({
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
      <path fill="currentColor" d="M12 3c-2.027 0-3.895.67-5.4 1.799-.608.457-1.306 1.15-1.927 1.867q-.146.17-.282.334H7.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1V2.5a1 1 0 0 1 2 0v3.045l.161-.188C3.833 4.582 4.635 3.774 5.4 3.2A10.96 10.96 0 0 1 12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-4.927 0-9.095-3.238-10.496-7.7a1 1 0 1 1 1.908-.6A9 9 0 0 0 12 21a9 9 0 1 0 0-18Z"/><path fill="currentColor" d="M13 7a1 1 0 1 0-2 0v5a1 1 0 0 0 .47.848l3.2 2a1 1 0 0 0 1.06-1.696L13 11.446z"/>
    </svg>
  );
}

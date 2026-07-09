import type { IconProps } from "../../../shared/types";

export function TimeFwdIcon({
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
      <path fill="currentColor" d="M12 3c2.027 0 3.895.67 5.4 1.799.608.457 1.306 1.15 1.927 1.867q.146.17.282.334H16.5a1 1 0 1 0 0 2H22a1 1 0 0 0 1-1V2.5a1 1 0 1 0-2 0v3.045l-.161-.188c-.672-.775-1.474-1.583-2.238-2.157A10.96 10.96 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11c4.927 0 9.095-3.238 10.496-7.7a1 1 0 1 0-1.908-.6A9 9 0 0 1 12 21a9 9 0 1 1 0-18Z"/><path fill="currentColor" d="M13 7a1 1 0 1 0-2 0v5a1 1 0 0 0 .47.848l3.2 2a1 1 0 0 0 1.06-1.696L13 11.446z"/>
    </svg>
  );
}

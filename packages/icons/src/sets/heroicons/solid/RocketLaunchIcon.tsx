import type { IconProps } from "../../../shared/types";

export function RocketLaunchIcon({
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
      <path fillRule="evenodd" d="M9.315 7.584A15.72 15.72 0 0 1 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.8 15.8 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666M15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd"/><path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.24 5.24 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.24 5.24 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.74 3.74 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008"/>
    </svg>
  );
}

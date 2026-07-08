import type { IconProps } from "../../../shared/types";

export function ClapperboardIcon({
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
      <path fill="currentColor" d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46-.857.858-1.213 2.022-1.36 3.786H6.6zM2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25zm19.87-1.5c-.147-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.337-1.16L14.9 7.25zM16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1z"/>
    </svg>
  );
}

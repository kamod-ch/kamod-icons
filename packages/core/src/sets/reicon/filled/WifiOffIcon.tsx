import type { IconProps } from "../../../shared/types";

export function WifiOffIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M1.707.293A1 1 0 0 0 .293 1.707L3.73 5.145A15.7 15.7 0 0 0 .286 7.8a1 1 0 0 0 1.428 1.4 13.7 13.7 0 0 1 3.491-2.58L7.48 8.893a12 12 0 0 0-3.666 2.379 1 1 0 0 0 1.374 1.453 10 10 0 0 1 3.852-2.272l2.559 2.559c-1.601.095-2.961.756-4.031 1.758a1 1 0 0 0 1.366 1.46C9.756 15.46 10.776 15 12 15c.801 0 1.507.197 2.125.54l8.168 8.167a1 1 0 0 0 1.414-1.414l-8.246-8.246-.031-.031-5.379-5.379-.025-.025-3.894-3.894-.033-.033zM12 5a15.3 15.3 0 0 0-3.38.374 1 1 0 1 1-.443-1.95A17.3 17.3 0 0 1 12 3c4.569 0 8.725 1.75 11.714 4.8a1 1 0 1 1-1.428 1.4C19.686 6.546 16.05 5 12 5Zm.055 3.954a1 1 0 0 1 1.091-.899 11.9 11.9 0 0 1 7.041 3.219 1 1 0 1 1-1.374 1.452 9.9 9.9 0 0 0-5.858-2.68 1 1 0 0 1-.9-1.092Z"/><path d="M10.75 19a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

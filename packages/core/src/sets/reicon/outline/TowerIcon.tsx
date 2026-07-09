import type { IconProps } from "../../../shared/types";

export function TowerIcon({
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
      <path fill="currentColor" d="M5.525 2.534C3.795 4.24 2.75 6.514 2.75 8.999c0 2.486 1.045 4.76 2.777 6.467a.75.75 0 0 1-1.054 1.068C2.482 14.57 1.25 11.921 1.25 8.999S2.48 3.43 4.471 1.466a.75.75 0 1 1 1.054 1.068Zm12.95 0c1.73 1.707 2.775 3.98 2.775 6.465 0 2.486-1.045 4.76-2.777 6.467a.75.75 0 0 0 1.054 1.068c1.991-1.964 3.223-4.613 3.223-7.535s-1.23-5.569-3.221-7.533a.75.75 0 0 0-1.054 1.068Z"/><path fill="currentColor" fillRule="evenodd" d="M12.75 11.122a2.251 2.251 0 1 0-1.5 0V22a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" clipRule="evenodd"/><path fill="currentColor" d="M16.745 9c0-1.147-.48-2.193-1.272-2.962a.75.75 0 1 1 1.045-1.076A5.6 5.6 0 0 1 18.245 9c0 1.58-.664 3.006-1.727 4.038a.75.75 0 0 1-1.045-1.076A4.1 4.1 0 0 0 16.745 9Zm-9.49 0c0-1.147.48-2.193 1.272-2.962a.75.75 0 0 0-1.045-1.076A5.6 5.6 0 0 0 5.755 9c0 1.58.664 3.006 1.727 4.038a.75.75 0 0 0 1.045-1.076A4.1 4.1 0 0 1 7.255 9Z"/>
    </svg>
  );
}

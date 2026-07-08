import type { IconProps } from "../../../shared/types";

export function FingerprintIcon({
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
      <path fill="currentColor" d="M5.813 3.923a8.75 8.75 0 0 1 11.656-.644.75.75 0 0 1-.938 1.171A7.25 7.25 0 0 0 4.75 10.11V17a.75.75 0 0 1-1.5 0v-6.89a8.75 8.75 0 0 1 2.563-6.187Z"/><path fill="currentColor" d="M8.641 6.641A4.75 4.75 0 0 1 16.75 10v8.11A4.75 4.75 0 0 1 12 22.86a.75.75 0 0 1 0-1.5 3.25 3.25 0 0 0 3.25-3.25V10a3.25 3.25 0 1 0-6.5 0v1.11a.75.75 0 0 1-1.5 0V10c0-1.26.5-2.468 1.391-3.359Zm10.918.743a.75.75 0 0 1 .913.538c.183.709.278 1.444.278 2.188v8a.75.75 0 0 1-1.5 0v-8c0-.617-.079-1.226-.23-1.813a.75.75 0 0 1 .538-.913Z"/><path fill="currentColor" d="M12 9.25a.75.75 0 0 1 .75.75v8.11a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75Zm-4 5.61a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"/>
    </svg>
  );
}

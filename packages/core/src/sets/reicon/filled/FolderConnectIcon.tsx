import type { IconProps } from "../../../shared/types";

export function FolderConnectIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M21.249 11.999v-4.25l-.001.001c0-1.518 0-2.281-.354-2.976a3.23 3.23 0 0 0-1.419-1.419C18.78 3 18.018 3 16.499 3h-3.764c-.148 0-.302 0-.417-.043a3 3 0 0 1-.206-.227l-.022-.026-.554-.646c-.192-.223-.32-.371-.504-.499a1.7 1.7 0 0 0-.542-.249c-.221-.06-.411-.06-.726-.06H7.5c-1.518 0-2.28 0-2.975.354a3.23 3.23 0 0 0-1.421 1.42c-.354.695-.354 1.457-.354 2.975v6c0 1.518 0 2.281.354 2.976a3.23 3.23 0 0 0 1.42 1.42c.695.354 1.457.354 2.975.354h3.751v2.629a2.26 2.26 0 0 0-1.372 1.372H5a.75.75 0 0 0 0 1.5h4.878a2.25 2.25 0 0 0 4.244 0H19a.75.75 0 0 0 0-1.5h-4.878a2.26 2.26 0 0 0-1.372-1.372v-2.629h3.749c1.519 0 2.281 0 2.976-.354a3.23 3.23 0 0 0 1.42-1.42c.354-.695.354-1.457.354-2.976ZM12 20.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" clipRule="evenodd"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function UserX3Icon({
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
      <path fill="currentColor" d="M9 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm0 12c-4.265 0-8.176 2.677-8.742 6.644A.75.75 0 0 0 1 21.75h16a.75.75 0 0 0 .742-.856C17.177 16.927 13.268 14.25 9 14.25Zm14.53.28a.75.75 0 0 1-1.06 0l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 0 1 0 1.06Z"/>
    </svg>
  );
}

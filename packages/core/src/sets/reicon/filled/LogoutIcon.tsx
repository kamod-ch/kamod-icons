import type { IconProps } from "../../../shared/types";

export function LogoutIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd"/><path fill="currentColor" d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293a2.25 2.25 0 0 1 0-4.5c.943 0 1.414 0 1.707-.293S12 8.693 12 7.75V4a8 8 0 0 0-8 8Z"/>
    </svg>
  );
}

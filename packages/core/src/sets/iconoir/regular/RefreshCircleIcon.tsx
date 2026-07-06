import type { IconProps } from "../../../shared/types";

export function RefreshCircleIcon({
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
      <circle cx="12" cy="12" r="10" stroke="currentColor"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.583 9.667C15.81 8.097 14.043 7 11.988 7 9.388 7 7.25 8.754 7 11"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.494 9.722H16.4a.6.6 0 0 0 .6-.6V7.5m-9.583 6.167C8.191 15.629 9.957 17 12.012 17c2.6 0 4.736-2.193 4.988-5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.506 13.622H7.6a.6.6 0 0 0-.6.6V16.4"/>
    </svg>
  );
}

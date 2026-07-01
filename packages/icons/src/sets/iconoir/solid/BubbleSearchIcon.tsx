import type { IconProps } from "../../../shared/types";

export function BubbleSearchIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M22.586 10.173a2.25 2.25 0 0 1-2.177-.582l-.541-.541a4.75 4.75 0 0 1-5.19-7.371 7.7 7.7 0 0 0-1.604-.376A11 11 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75q0-.543-.053-1.074s-.045-.325-.111-.753M19.97 5.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M15.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clipRule="evenodd"/>
    </svg>
  );
}

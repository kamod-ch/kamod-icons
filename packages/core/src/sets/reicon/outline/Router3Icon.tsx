import type { IconProps } from "../../../shared/types";

export function Router3Icon({
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
      <path fill="currentColor" d="M12.109 5.684a4.752 4.752 0 0 1 8.781 0 .75.75 0 1 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574Z"/><path fill="currentColor" fillRule="evenodd" d="M7 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6.25 15a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M11.25 15a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"/><path fill="currentColor" fillRule="evenodd" d="M7 9.25a5.75 5.75 0 0 0-2.03 11.132l-.64 1.283a.75.75 0 1 0 1.34.67l.805-1.609q.26.024.525.024h10q.265 0 .525-.024l.804 1.61a.75.75 0 1 0 1.342-.671l-.642-1.283A5.752 5.752 0 0 0 17 9.25zM2.75 15A4.25 4.25 0 0 1 7 10.75h10a4.25 4.25 0 0 1 0 8.5H7A4.25 4.25 0 0 1 2.75 15Z" clipRule="evenodd"/><path fill="currentColor" d="M16.5 5.25a2.25 2.25 0 0 0-2.16 1.618.75.75 0 1 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 5.25Z"/><path fill="currentColor" d="M16.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
    </svg>
  );
}

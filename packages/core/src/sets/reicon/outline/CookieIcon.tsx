import type { IconProps } from "../../../shared/types";

export function CookieIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 8c-1.91 0-3.469-1.433-3.703-3.28-.099.01-.195.03-.297.03a2.994 2.994 0 0 1-2.989-2.887C4.348 2.452 1.75 5.419 1.75 9a7.25 7.25 0 0 0 14.5 0 7.3 7.3 0 0 0-.118-1.271c-.428.17-.893.271-1.382.271"/><circle cx="12.25" cy="1.75" r=".75" fill="currentColor"/><circle cx="14.75" cy="4.25" r=".75" fill="currentColor"/><circle cx="11.25" cy="11.75" r=".75" fill="currentColor"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="7.25" cy="11.25" r="1.25" fill="currentColor"/></g>
    </svg>
  );
}

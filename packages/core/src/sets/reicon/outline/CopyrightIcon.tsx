import type { IconProps } from "../../../shared/types";

export function CopyrightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.286 8.75c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389 5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388.75.75 0 0 1-.566 1.39 3.8 3.8 0 0 0-1.431-.278Z" clipRule="evenodd"/>
    </svg>
  );
}

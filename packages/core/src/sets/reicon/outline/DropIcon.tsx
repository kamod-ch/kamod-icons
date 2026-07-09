import type { IconProps } from "../../../shared/types";

export function DropIcon({
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
      <path fill="currentColor" d="M11.7 6.957a.75.75 0 1 0-.629-1.361c-1.965.908-3.48 2.715-4.171 4.901a.75.75 0 0 0 1.43.453c.577-1.825 1.825-3.278 3.37-3.993Z"/><path fill="currentColor" fillRule="evenodd" d="M14.386 1.729a6.18 6.18 0 0 0-4.772 0C5.154 3.59 2.25 8.022 2.25 12.929v.264c0 5.262 4.175 9.557 9.362 9.557h.777c5.186 0 9.361-4.295 9.361-9.557v-.265c0-4.906-2.903-9.337-7.364-11.2Zm-4.194 1.384a4.68 4.68 0 0 1 3.616 0c3.888 1.623 6.442 5.498 6.442 9.815v.265c0 4.466-3.535 8.057-7.861 8.057h-.777c-4.326 0-7.862-3.591-7.862-8.057v-.265c0-4.317 2.554-8.192 6.442-9.815Z" clipRule="evenodd"/>
    </svg>
  );
}

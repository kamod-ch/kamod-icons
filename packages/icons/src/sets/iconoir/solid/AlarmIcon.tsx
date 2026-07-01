import type { IconProps } from "../../../shared/types";

export function AlarmIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m0 10.5a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v4.25H17a.75.75 0 0 1 0 1.5zm-7.6-9.8a.75.75 0 0 0 1.05.15l2-1.5a.75.75 0 1 0-.9-1.2l-2 1.5a.75.75 0 0 0-.15 1.05m15.2 0a.75.75 0 0 1-1.05.15l-2-1.5a.75.75 0 1 1 .9-1.2l2 1.5a.75.75 0 0 1 .15 1.05" clipRule="evenodd"/>
    </svg>
  );
}

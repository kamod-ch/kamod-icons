import type { IconProps } from "../../../shared/types";

export function WindowTabsIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4.222 3.25c-1.661 0-2.972 1.38-2.972 3.036v11.428c0 1.657 1.31 3.036 2.972 3.036h15.556c1.661 0 2.972-1.38 2.972-3.036V6.286c0-1.657-1.31-3.036-2.972-3.036zM9.75 5.5a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h11.25a.75.75 0 0 0 0-1.5h-4V5.5a.75.75 0 0 0-1.5 0v1.75h-5z" clipRule="evenodd"/>
    </svg>
  );
}

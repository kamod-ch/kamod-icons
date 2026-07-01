import type { IconProps } from "../../../shared/types";

export function WebWindowIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4.222 3.25c-1.661 0-2.972 1.38-2.972 3.036v11.428c0 1.657 1.31 3.036 2.972 3.036h15.556c1.661 0 2.972-1.38 2.972-3.036V6.286c0-1.657-1.31-3.036-2.972-3.036zm.778 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function LifeRingIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M4.239 3.178A11.7 11.7 0 0 1 12 .25c2.975 0 5.691 1.105 7.761 2.928l-5.333 5.333A4.23 4.23 0 0 0 12 7.75a4.23 4.23 0 0 0-2.428.761zM3.178 4.239A11.7 11.7 0 0 0 .25 12c0 2.975 1.105 5.691 2.928 7.761l5.333-5.333A4.23 4.23 0 0 1 7.75 12c0-.903.281-1.74.761-2.428zm6.394 11.25-5.333 5.333A11.7 11.7 0 0 0 12 23.75c2.975 0 5.691-1.105 7.761-2.928l-5.333-5.333A4.23 4.23 0 0 1 12 16.25a4.23 4.23 0 0 1-2.428-.761Zm5.917-1.061 5.333 5.333A11.7 11.7 0 0 0 23.75 12c0-2.975-1.105-5.691-2.928-7.761l-5.333 5.333A4.23 4.23 0 0 1 16.25 12a4.23 4.23 0 0 1-.761 2.428Z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

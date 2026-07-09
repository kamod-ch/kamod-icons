import type { IconProps } from "../../../shared/types";

export function HeartCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM14.2 7.5c-1.008 0-1.817.797-2.2 1.25-.383-.453-1.192-1.25-2.2-1.25C8.036 7.5 7 9 7 10.737 7 14 11 16.25 12 16.75c1-.5 5-2.75 5-6.013C17 9 15.964 7.5 14.2 7.5Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

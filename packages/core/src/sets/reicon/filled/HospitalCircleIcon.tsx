import type { IconProps } from "../../../shared/types";

export function HospitalCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm9.5-4.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-3.75h4.5v3.75a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0v3.75h-4.5z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

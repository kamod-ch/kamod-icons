import type { IconProps } from "../../../shared/types";

export function ArrowDownLeftCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm7.72 4.03c.14.141.331.22.53.22H14a.75.75 0 0 0 0-1.5h-3.69l5.72-5.72a.75.75 0 0 0-1.06-1.06l-5.72 5.72V10a.75.75 0 0 0-1.5 0v5.5c0 .199.079.39.22.53Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

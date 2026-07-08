import type { IconProps } from "../../../shared/types";

export function ArrowDownRightCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm15.78 4.03a.75.75 0 0 1-.53.22H10a.75.75 0 0 1 0-1.5h3.69L7.97 9.03a.75.75 0 0 1 1.06-1.06l5.72 5.72V10a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.22.53Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

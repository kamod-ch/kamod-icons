import type { IconProps } from "../../../shared/types";

export function Book4Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 19.5v-14A4.25 4.25 0 0 1 6.5 1.25h13a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2 2.236v3.514H21a.75.75 0 0 1 0 1.5H5.5a3.25 3.25 0 0 1-3.25-3.25Zm1.5-14A2.75 2.75 0 0 1 6.5 2.75h13a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-14c-.644 0-1.245.188-1.75.51zm14.5 12.25H5.5a1.75 1.75 0 1 0 0 3.5h12.75z" clipRule="evenodd"/>
    </svg>
  );
}

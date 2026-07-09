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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M2.25 5.5v14a3.25 3.25 0 0 0 3.25 3.25H21a.75.75 0 0 0 0-1.5h-1.25v-3.514a2.25 2.25 0 0 0 2-2.236v-12a2.25 2.25 0 0 0-2.25-2.25h-13A4.25 4.25 0 0 0 2.25 5.5Zm16 12.25H5.5a1.75 1.75 0 1 0 0 3.5h12.75z" clipRule="evenodd"/>
    </svg>
  );
}

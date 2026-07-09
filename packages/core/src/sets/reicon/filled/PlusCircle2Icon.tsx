import type { IconProps } from "../../../shared/types";

export function PlusCircle2Icon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM12 16.75a.75.75 0 0 1-.75-.75v-3.25H8a.75.75 0 0 1 0-1.5h3.25V8a.75.75 0 0 1 1.5 0v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-.75.75Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

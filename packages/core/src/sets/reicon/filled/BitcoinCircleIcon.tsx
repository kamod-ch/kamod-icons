import type { IconProps } from "../../../shared/types";

export function BitcoinCircleIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M10.586 11.25v-2h2.164a1 1 0 0 1 .01 2zm0 3.5v-2H13.5a1 1 0 1 1 0 2z"/><path fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm10.875-5a.625.625 0 1 0-1.25 0v.75H8.75a.75.75 0 0 0 0 1.5h.336v5.5H8.75a.75.75 0 0 0 0 1.5h1.125V17a.625.625 0 1 0 1.25 0v-.75h.75V17a.625.625 0 1 0 1.25 0v-.75h.375a2.5 2.5 0 0 0 1.332-4.616 2.5 2.5 0 0 0-1.707-3.856V7a.625.625 0 1 0-1.25 0v.75h-.75z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

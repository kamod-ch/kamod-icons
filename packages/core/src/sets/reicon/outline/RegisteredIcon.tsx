import type { IconProps } from "../../../shared/types";

export function RegisteredIcon({
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
      <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"><path d="M8.25 8.353c0-.61.494-1.103 1.103-1.103h3.397a3 3 0 0 1 1.068 5.804l1.792 2.51a.75.75 0 1 1-1.22.872l-2.276-3.186H9.75V16a.75.75 0 0 1-1.5 0zm4.259 3.397H9.75v-3h3a1.5 1.5 0 0 1 0 3z"/><path d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75Z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

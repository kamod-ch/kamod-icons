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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" clipPath="url(#a)"><path d="M12.75 11.75h-3v-3h3a1.5 1.5 0 0 1 0 3Z"/><path fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm8-3.647c0-.61.494-1.103 1.103-1.103h3.397a3 3 0 0 1 1.068 5.804l1.792 2.51a.75.75 0 1 1-1.22.872l-2.276-3.186H9.75V16a.75.75 0 0 1-1.5 0z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

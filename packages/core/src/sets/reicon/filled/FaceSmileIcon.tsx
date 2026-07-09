import type { IconProps } from "../../../shared/types";

export function FaceSmileIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM9 11.25c.575 0 .894-.447 1.024-.707.153-.306.226-.676.226-1.043s-.073-.737-.226-1.043c-.13-.26-.449-.707-1.024-.707s-.894.447-1.024.707A2.4 2.4 0 0 0 7.75 9.5c0 .367.073.737.226 1.043.13.26.449.707 1.024.707ZM7.55 14.4a.75.75 0 0 1 1.05.15 4.24 4.24 0 0 0 3.4 1.7c1.39 0 2.624-.667 3.4-1.7a.75.75 0 1 1 1.2.9 5.74 5.74 0 0 1-4.6 2.3 5.74 5.74 0 0 1-4.6-2.3.75.75 0 0 1 .15-1.05Zm8.474-3.857c-.13.26-.449.707-1.024.707s-.894-.447-1.024-.707A2.4 2.4 0 0 1 13.75 9.5c0-.367.073-.737.226-1.043.13-.26.449-.707 1.024-.707s.894.447 1.024.707c.153.306.226.676.226 1.043s-.073.737-.226 1.043Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

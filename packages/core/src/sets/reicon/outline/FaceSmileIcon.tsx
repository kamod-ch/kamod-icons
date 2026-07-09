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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" clipPath="url(#a)"><path d="M8.6 14.55a.75.75 0 1 0-1.2.9 5.74 5.74 0 0 0 4.6 2.3 5.74 5.74 0 0 0 4.6-2.3.75.75 0 1 0-1.2-.9 4.24 4.24 0 0 1-3.4 1.7 4.24 4.24 0 0 1-3.4-1.7Zm.4-3.3c.575 0 .894-.447 1.024-.707.153-.306.226-.676.226-1.043s-.073-.737-.226-1.043c-.13-.26-.449-.707-1.024-.707s-.894.447-1.024.707A2.4 2.4 0 0 0 7.75 9.5c0 .367.073.737.226 1.043.13.26.449.707 1.024.707Zm6 0c.575 0 .894-.447 1.024-.707.153-.306.226-.676.226-1.043s-.073-.737-.226-1.043c-.13-.26-.449-.707-1.024-.707s-.894.447-1.024.707A2.4 2.4 0 0 0 13.75 9.5c0 .367.073.737.226 1.043.13.26.449.707 1.024.707Z"/><path fillRule="evenodd" d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25ZM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function SpeedometerIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM12 5.75a6.25 6.25 0 0 0-4.374 10.714.75.75 0 0 1-1.05 1.072 7.75 7.75 0 0 1 6.53-13.207.75.75 0 0 1-.212 1.484A6 6 0 0 0 12 5.75Zm6.823 4.508a.75.75 0 0 1 .849.636q.077.542.078 1.106c0 2.168-.892 4.13-2.326 5.536a.75.75 0 1 1-1.05-1.072 6.23 6.23 0 0 0 1.813-5.358.75.75 0 0 1 .636-.848Zm-1.61-3.127-.146.236a253 253 0 0 1-1.606 2.577c-.456.722-.931 1.463-1.33 2.061-.199.3-.38.564-.53.773-.146.204-.274.37-.364.46a1.75 1.75 0 0 1-2.475-2.475c.09-.09.256-.218.46-.364.21-.15.474-.331.773-.53.598-.399 1.339-.874 2.06-1.33a254 254 0 0 1 2.577-1.607l.237-.145a.25.25 0 0 1 .344.344Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

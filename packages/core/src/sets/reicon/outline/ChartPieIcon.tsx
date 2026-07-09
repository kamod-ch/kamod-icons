import type { IconProps } from "../../../shared/types";

export function ChartPieIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M11.532.761A1.234 1.234 0 0 0 10.25 2v.777C4.94 3.161.75 7.591.75 13c0 5.66 4.59 10.25 10.25 10.25 5.409 0 9.839-4.19 10.223-9.5H22c.682 0 1.27-.56 1.239-1.282C22.967 6.125 17.875 1.033 11.532.76ZM20.51 12.25h-8.76V2.276c5.34.367 9.607 4.635 9.974 9.974zM10.25 4.282V12.5c0 .69.56 1.25 1.25 1.25h8.218a8.75 8.75 0 1 1-9.468-9.468Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

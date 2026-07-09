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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" clipPath="url(#a)"><path d="M11.532.761A1.234 1.234 0 0 0 10.25 2v10.5c0 .69.56 1.25 1.25 1.25H22c.682 0 1.27-.56 1.239-1.282C22.967 6.125 17.875 1.033 11.532.76Z"/><path d="M8.75 3.983a.75.75 0 0 0-.987-.711C3.69 4.627.75 8.469.75 13c0 5.66 4.59 10.25 10.25 10.25 4.531 0 8.374-2.94 9.728-7.013a.75.75 0 0 0-.711-.987H10c-.69 0-1.25-.56-1.25-1.25z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

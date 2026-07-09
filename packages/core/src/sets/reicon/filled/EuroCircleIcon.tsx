import type { IconProps } from "../../../shared/types";

export function EuroCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm13.217-5.643a4.47 4.47 0 0 0-2.957.36c-.925.454-1.697 1.206-2.231 2.145q-.243.425-.414.888H6.5a.75.75 0 0 0 0 1.5h1.007a6.6 6.6 0 0 0 0 1.5H6.5a.75.75 0 0 0 0 1.5h1.365q.171.463.414.888c.534.939 1.306 1.691 2.23 2.145a4.47 4.47 0 0 0 2.958.36c.997-.222 1.898-.779 2.597-1.578a.75.75 0 1 0-1.129-.987c-.507.579-1.133.954-1.794 1.101a2.97 2.97 0 0 1-1.971-.243c-.63-.31-1.188-.838-1.588-1.54l-.08-.146H12.5a.75.75 0 1 0 0-1.5H9.02a5 5 0 0 1 0-1.5h3.48a.75.75 0 1 0 0-1.5H9.502q.038-.075.08-.146c.399-.702.956-1.23 1.587-1.54a2.97 2.97 0 0 1 1.97-.243c.662.147 1.288.523 1.795 1.101a.75.75 0 1 0 1.129-.987c-.7-.8-1.6-1.356-2.597-1.578Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

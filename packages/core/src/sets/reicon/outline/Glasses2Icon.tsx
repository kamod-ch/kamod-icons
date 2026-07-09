import type { IconProps } from "../../../shared/types";

export function Glasses2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.205 4.918a2.75 2.75 0 0 1 3.983-1.842l1.165.623a.75.75 0 0 1-.707 1.323l-1.165-.623a1.25 1.25 0 0 0-1.81.837L3.2 12.01l-.07.333a5.002 5.002 0 0 1 7.89 2.408h1.959a5.002 5.002 0 0 1 7.89-2.408l-.07-.333-1.47-6.773a1.25 1.25 0 0 0-1.81-.837l-1.166.623a.75.75 0 1 1-.707-1.323l1.165-.623a2.75 2.75 0 0 1 3.984 1.842l1.47 6.773c.323 1.481.485 2.993.485 4.51v.049a5 5 0 0 1-10 0h-1.5a5 5 0 0 1-10 0v-.05c0-1.516.162-3.028.484-4.51zM6.25 12.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm11.5 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" clipRule="evenodd"/>
    </svg>
  );
}

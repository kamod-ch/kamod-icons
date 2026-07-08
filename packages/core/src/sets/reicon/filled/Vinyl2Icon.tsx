import type { IconProps } from "../../../shared/types";

export function Vinyl2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142ZM17.126 6.873a.75.75 0 1 0-1.06 1.061 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.06 7.25 7.25 0 0 0 0-10.253ZM9.349 9.348a3.75 3.75 0 1 1 5.304 5.304 3.75 3.75 0 0 1-5.304-5.304Zm1.061 1.061a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182ZM7.934 7.934a.75.75 0 0 0-1.06-1.06 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.061 5.75 5.75 0 0 1 0-8.132Z" clipRule="evenodd"/>
    </svg>
  );
}

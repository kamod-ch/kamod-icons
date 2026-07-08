import type { IconProps } from "../../../shared/types";

export function EarbudsIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M22 6.188V8.3c0 1.657-1.422 3-3.177 3-.584 0-1.058.448-1.058 1v4.95H13V8.313c0-.29 0-.436.006-.558.134-2.569 2.309-4.623 5.028-4.749.13-.006.284-.006.591-.006.184 0 .276 0 .354.004 1.632.075 2.937 1.308 3.017 2.849.004.073.004.16.004.335ZM20.25 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/><path fill="currentColor" d="M15.382 21C14.067 21 13 19.993 13 18.75h4.765c0 1.243-1.067 2.25-2.383 2.25Z"/><path fill="currentColor" fillRule="evenodd" d="M2 6.188V8.3c0 1.657 1.422 3 3.176 3 .585 0 1.06.448 1.06 1v4.95H11V8.313c0-.29 0-.436-.006-.558-.134-2.569-2.309-4.623-5.028-4.749C5.836 3 5.682 3 5.375 3c-.184 0-.277 0-.354.004-1.632.075-2.937 1.308-3.017 2.849C2 5.926 2 6.013 2 6.188ZM3.75 6a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z" clipRule="evenodd"/><path fill="currentColor" d="M8.618 21C9.933 21 11 19.993 11 18.75H6.235c0 1.243 1.067 2.25 2.383 2.25Z"/>
    </svg>
  );
}

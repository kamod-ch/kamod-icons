import type { IconProps } from "../../../shared/types";

export function HalfCookieIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.8 14c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m14-6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-5-3.99.01-.011m9.99.011.01-.011M11 12.01l.01-.011M21 9.01l.01-.011M17 6.01l.01-.011M11 2c-.5 1.5.5 3 2.085 3C11 8.5 13 12 18 11.5c0 2.5 2.5 3 3.7 2.514"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function KeyframesIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="m10.07 5.226 4.342 4.963a2.75 2.75 0 0 1 0 3.622l-4.342 4.963a2.75 2.75 0 0 1-4.14 0L1.588 13.81a2.75 2.75 0 0 1 0-3.622L5.93 5.226a2.75 2.75 0 0 1 4.14 0" clipRule="evenodd"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 19 4.884-5.698a2 2 0 0 0 0-2.604L13 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 19 4.884-5.698a2 2 0 0 0 0-2.604L17 5"/>
    </svg>
  );
}

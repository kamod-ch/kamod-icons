import type { IconProps } from "../../../shared/types";

export function PenWriting6Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16.062 6.576 3.622 2.733M8.71 20.334a.33.33 0 0 1-.332-.31c-.01-.145-.24-3.586 1.38-5.73l7.232-9.593a2.58 2.58 0 0 1 2.078-1.034c.57 0 1.11.181 1.565.524a2.605 2.605 0 0 1 .51 3.645l-7.234 9.593c-1.618 2.145-5.105 2.905-5.199 2.905m-4.198-.848c-1.638-1.384-2.082-2.61-2.164-3.513-.259-2.853 2.928-4.374 2.907-7.558C5.24 6.372 3.913 4.72 2.832 3.667"/>
    </svg>
  );
}

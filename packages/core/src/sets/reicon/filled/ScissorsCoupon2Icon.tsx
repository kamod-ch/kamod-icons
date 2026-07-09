import type { IconProps } from "../../../shared/types";

export function ScissorsCoupon2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path fillRule="evenodd" d="M4.662 1.333a3.333 3.333 0 0 0-1.435 6.343l1.96.99-1.962.992a3.334 3.334 0 1 0 3.563.441l.617-.312 6.148 3.106a1 1 0 0 0 .901-1.786l-4.83-2.44 4.83-2.441a1 1 0 1 0-.901-1.785L7.405 7.546l-.617-.312a3.334 3.334 0 0 0-2.125-5.9Zm-.62 10.153.014-.007.031-.016a1.334 1.334 0 1 1-.045.023ZM4.09 5.87a1.334 1.334 0 1 0-.049-.024l.016.007z" clipRule="evenodd"/><path d="M4.04 17.964q.306.036.622.036a5.335 5.335 0 0 0 5.294-4.684l2.695 1.362a3 3 0 0 0 2.705-5.356l-1.298-.655 1.298-.656c.345-.174.642-.406.885-.678h2.763A3.666 3.666 0 0 1 22.67 11v6.667c0 1.98-1.635 3.666-3.642 3.666H7.67c-1.905 0-3.476-1.52-3.63-3.369Z"/></g>
    </svg>
  );
}

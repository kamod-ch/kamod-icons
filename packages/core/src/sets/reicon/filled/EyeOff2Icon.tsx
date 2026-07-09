import type { IconProps } from "../../../shared/types";

export function EyeOff2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.47 1.47a.75.75 0 0 1 1.06 0l3.935 3.934.005.005L18.59 17.53l.005.004 3.934 3.935a.75.75 0 1 1-1.06 1.06l-3.502-3.501c-5.589 3.55-13.839 1.604-16.51-5.836a3.53 3.53 0 0 1 0-2.386c.74-2.06 1.915-3.71 3.353-4.935L1.47 2.53a.75.75 0 0 1 0-1.06ZM7.75 12c0-.904.281-1.74.76-2.429l1.088 1.087A2.74 2.74 0 0 0 9.25 12 2.747 2.747 0 0 0 12 14.75c.488 0 .945-.126 1.342-.348l1.087 1.088a4.24 4.24 0 0 1-2.429.76c-2.35 0-4.25-1.9-4.25-4.25Zm14.793-1.193c-2.324-6.47-8.877-8.788-14.215-6.943a.75.75 0 0 0-.285 1.24l11.529 11.528a.75.75 0 0 0 1.119-.066 12 12 0 0 0 1.852-3.373 3.53 3.53 0 0 0 0-2.386Zm-6.3 1.436q.007-.12.007-.243a4.246 4.246 0 0 0-4.493-4.243z" clipRule="evenodd"/>
    </svg>
  );
}

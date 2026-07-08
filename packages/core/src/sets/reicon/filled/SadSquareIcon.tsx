import type { IconProps } from "../../../shared/types";

export function SadSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm4.933 13.983a.75.75 0 0 0 1.05.155A4.27 4.27 0 0 1 12 16.75a4.27 4.27 0 0 1 2.553.852.75.75 0 1 0 .894-1.204A5.77 5.77 0 0 0 12 15.25a5.77 5.77 0 0 0-3.447 1.148.75.75 0 0 0-.156 1.049ZM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5Z" clipRule="evenodd"/>
    </svg>
  );
}

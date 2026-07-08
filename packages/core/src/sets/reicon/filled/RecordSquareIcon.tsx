import type { IconProps } from "../../../shared/types";

export function RecordSquareIcon({
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
      <path fill="currentColor" d="M14.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm9.797 10.286a3.25 3.25 0 1 1 2.74 1.5H7.999a3.25 3.25 0 1 1 2.74-1.5z" clipRule="evenodd"/>
    </svg>
  );
}

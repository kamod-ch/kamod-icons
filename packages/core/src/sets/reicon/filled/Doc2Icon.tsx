import type { IconProps } from "../../../shared/types";

export function Doc2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4 5v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1Zm3.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/><path fill="currentColor" d="M4.409 4.087A1 1 0 0 1 5 5h12q.519.001 1 .126v-.82a2 2 0 0 0-2.283-1.98L4.92 3.87a1.07 1.07 0 0 0-.511.218Z"/>
    </svg>
  );
}

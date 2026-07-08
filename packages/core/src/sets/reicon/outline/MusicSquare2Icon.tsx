import type { IconProps } from "../../../shared/types";

export function MusicSquare2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.42 17.11a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.18 16.06a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14m-4.19-5.02 5.76-1.57"/>
    </svg>
  );
}

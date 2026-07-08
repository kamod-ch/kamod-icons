import type { IconProps } from "../../../shared/types";

export function OfficeIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M20.333 6.667h-6A2.336 2.336 0 0 0 12 9v11h-2v-7a2.336 2.336 0 0 0-2.333-2.333h-4A2.336 2.336 0 0 0 1.333 13v6.667A2.336 2.336 0 0 0 3.667 22h16.666a2.336 2.336 0 0 0 2.334-2.333V9a2.336 2.336 0 0 0-2.334-2.333Zm-2 10h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/><path fillRule="evenodd" d="M14.885 2.93 7.553 5.617a.33.33 0 0 0-.22.314v2.402a1 1 0 1 1-2 0V5.931c0-.981.613-1.853 1.53-2.19l7.334-2.69a2.333 2.333 0 0 1 3.136 2.192v1.09a1 1 0 0 1-2 0v-1.09a.333.333 0 0 0-.448-.313Z" clipRule="evenodd"/></g>
    </svg>
  );
}

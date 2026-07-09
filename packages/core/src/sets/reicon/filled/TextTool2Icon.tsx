import type { IconProps } from "../../../shared/types";

export function TextTool2Icon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="M14.25 15.5H3.75A2.75 2.75 0 0 1 1 12.75V12a.75.75 0 0 1 1.5 0v.75c0 .689.561 1.25 1.25 1.25h10.5c.689 0 1.25-.561 1.25-1.25V12a.75.75 0 0 1 1.5 0v.75a2.75 2.75 0 0 1-2.75 2.75Zm2-8.75A.75.75 0 0 1 15.5 6v-.75c0-.689-.561-1.25-1.25-1.25H3.75c-.689 0-1.25.561-1.25 1.25V6A.75.75 0 0 1 1 6v-.75A2.75 2.75 0 0 1 3.75 2.5h10.5A2.75 2.75 0 0 1 17 5.25V6a.75.75 0 0 1-.75.75Z"/><path d="m12.489 11.959-2.73-6.5A.75.75 0 0 0 9.068 5h-.135a.75.75 0 0 0-.691.459l-2.73 6.5a.75.75 0 1 0 1.382.581l.437-1.041h3.339l.437 1.041a.75.75 0 0 0 .981.4.75.75 0 0 0 .401-.982ZM7.961 10 9 7.526 10.039 10z"/><circle cx="1.75" cy="9" r=".75"/><circle cx="16.25" cy="9" r=".75"/></g>
    </svg>
  );
}

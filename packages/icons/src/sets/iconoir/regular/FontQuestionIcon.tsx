import type { IconProps } from "../../../shared/types";

export function FontQuestionIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.469 18.374 1.064-2.341m9.58 2.341-1.064-2.341m0 0L8.79 6.664l-4.258 9.368m8.516 0H4.533m10.645-7.238c0-3.725 5.854-3.725 5.854 0 0 2.661-2.66 2.13-2.66 5.322m-.001 4.269.01-.012"/>
    </svg>
  );
}

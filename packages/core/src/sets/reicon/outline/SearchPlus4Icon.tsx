import type { IconProps } from "../../../shared/types";

export function SearchPlus4Icon({
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
      <path fill="currentColor" d="M14.25 10.5a.75.75 0 0 1-.75.75h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H7.5a.75.75 0 0 1 0-1.5h2.25V7.5a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 .75.75Z"/><path fill="currentColor" fillRule="evenodd" d="M16.489 17.55a9.2 9.2 0 0 1-5.989 2.2 9.25 9.25 0 1 1 7.05-3.261l4.98 4.98a.75.75 0 1 1-1.06 1.061zM2.75 10.5a7.75 7.75 0 1 1 13.33 5.379.7.7 0 0 0-.201.2A7.75 7.75 0 0 1 2.75 10.5Z" clipRule="evenodd"/>
    </svg>
  );
}

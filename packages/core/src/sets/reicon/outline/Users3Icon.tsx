import type { IconProps } from "../../../shared/types";

export function Users3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.5 7.25a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd"/><path fill="currentColor" d="M15.603 15.116a5 5 0 0 1 1.897-.366c2.796 0 4.75 2.193 4.75 4.25a.75.75 0 0 0 1.5 0c0-2.943-2.685-5.75-6.25-5.75a6.5 6.5 0 0 0-2.462.476.75.75 0 1 0 .565 1.39ZM1.75 20.5c0-2.517 2.544-5.25 6.25-5.25s6.25 2.733 6.25 5.25a.75.75 0 0 0 1.5 0c0-3.483-3.36-6.75-7.75-6.75-4.388 0-7.75 3.267-7.75 6.75a.75.75 0 0 0 1.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M17.5 4.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clipRule="evenodd"/>
    </svg>
  );
}

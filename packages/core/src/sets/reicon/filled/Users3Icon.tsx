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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M8 2.75a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm9.5 10.5a6.5 6.5 0 0 0-2.462.476.75.75 0 0 0-.24 1.233c1.193 1.16 2.019 2.605 2.322 4.183a.75.75 0 0 0 .737.608H23a.75.75 0 0 0 .75-.75c0-2.943-2.685-5.75-6.25-5.75Zm-9.5.5c-4.388 0-7.75 3.267-7.75 6.75 0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75c0-3.483-3.36-6.75-7.75-6.75Zm9.5-9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
    </svg>
  );
}

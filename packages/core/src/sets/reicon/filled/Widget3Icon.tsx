import type { IconProps } from "../../../shared/types";

export function Widget3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm11 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm9.5-11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0Zm-11 11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}

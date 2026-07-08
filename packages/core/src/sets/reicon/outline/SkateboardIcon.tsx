import type { IconProps } from "../../../shared/types";

export function SkateboardIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="m2.624 6.584.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219 1.248.832-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219zM7 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM4.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM17 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM14.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}

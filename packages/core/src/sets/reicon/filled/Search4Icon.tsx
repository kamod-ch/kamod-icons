import type { IconProps } from "../../../shared/types";

export function Search4Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M16.473 17.888A9.46 9.46 0 0 1 10.5 20a9.5 9.5 0 1 1 9.5-9.5 9.46 9.46 0 0 1-2.113 5.973l4.82 4.82a1 1 0 0 1-1.414 1.414zM3 10.5a7.5 7.5 0 1 1 12.916 5.188 1 1 0 0 0-.228.228A7.5 7.5 0 0 1 3 10.5Z" clipRule="evenodd"/>
    </svg>
  );
}

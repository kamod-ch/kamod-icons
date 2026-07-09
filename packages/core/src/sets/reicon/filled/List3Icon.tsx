import type { IconProps } from "../../../shared/types";

export function List3Icon({
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
      <path fill="currentColor" d="M2 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM7 4a1 1 0 0 0 0 2h15a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2zm-1 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM2 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/>
    </svg>
  );
}

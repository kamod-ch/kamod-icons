import type { IconProps } from "../../../shared/types";

export function Menu2Icon({
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
      <path fill="currentColor" d="M23 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1Zm0 8a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h20a1 1 0 0 1 1 1Zm-1 9a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2z"/>
    </svg>
  );
}

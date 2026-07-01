import type { IconProps } from "../../../shared/types";

export function ContainerIcon({
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
      <path d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01M8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01"/>
    </svg>
  );
}

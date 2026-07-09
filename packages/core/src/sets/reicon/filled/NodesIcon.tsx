import type { IconProps } from "../../../shared/types";

export function NodesIcon({
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
      <path fill="currentColor" fillRule="evenodd" strokeWidth="1.333" d="M12 1.333a3.666 3.666 0 1 0 0 7.334c1.5 0 2.788-.9 3.357-2.189a7.36 7.36 0 0 1 3.614 4.24 1 1 0 0 0 1.9-.622 9.36 9.36 0 0 0-5.254-5.703A3.67 3.67 0 0 0 12 1.333Zm-5.461 6.77a1 1 0 1 0-1.49-1.335 9.36 9.36 0 0 0-2.31 7.403 3.666 3.666 0 1 0 6 2.829 3.666 3.666 0 0 0-4.065-3.645 7.36 7.36 0 0 1 1.865-5.252Zm12.389 5.23a3.666 3.666 0 0 0-2.957 5.835 7.36 7.36 0 0 1-5.485 1.01 1 1 0 0 0-.413 1.957 9.36 9.36 0 0 0 7.572-1.699 3.666 3.666 0 1 0 1.283-7.103Z" clipRule="evenodd"/>
    </svg>
  );
}

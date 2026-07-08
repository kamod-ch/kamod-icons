import type { IconProps } from "../../../shared/types";

export function DropIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365Z" clipRule="evenodd"/>
    </svg>
  );
}

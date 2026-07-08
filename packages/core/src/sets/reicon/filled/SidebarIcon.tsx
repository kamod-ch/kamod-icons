import type { IconProps } from "../../../shared/types";

export function SidebarIcon({
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
      <path fill="currentColor" d="M22 11v2c0 3.771 0 5.657-1.172 6.828-.974.975-2.442 1.139-5.078 1.166V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11Z"/><path fill="currentColor" fillRule="evenodd" d="M10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3Zm-5.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm1 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}

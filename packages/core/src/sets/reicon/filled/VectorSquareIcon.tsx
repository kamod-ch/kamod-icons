import type { IconProps } from "../../../shared/types";

export function VectorSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17 3.25c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 20.75 7h-.25v10h.25c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 17 20.75v-.25H7v.25a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h.25V7h-.25A1.75 1.75 0 0 1 1.5 5.25v-2c0-.966.784-1.75 1.75-1.75h2C6.216 1.5 7 2.284 7 3.25v.25h10zM17 5H7v.25A1.75 1.75 0 0 1 5.25 7H5v10h.25c.966 0 1.75.784 1.75 1.75V19h10v-.25c0-.966.784-1.75 1.75-1.75H19V7h-.25A1.75 1.75 0 0 1 17 5.25z" clipRule="evenodd"/>
    </svg>
  );
}

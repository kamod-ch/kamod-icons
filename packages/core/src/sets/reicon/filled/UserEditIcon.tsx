import type { IconProps } from "../../../shared/types";

export function UserEditIcon({
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
      <path fill="currentColor" d="M4.75 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM1.258 19.894C1.824 15.927 5.735 13.25 10 13.25c1.348 0 2.647.263 3.814.744a.75.75 0 0 1 .245 1.224l-2.346 2.347c-.2.2-.339.45-.402.725l-.43 1.878a.75.75 0 0 1-.732.582H2a.75.75 0 0 1-.742-.856Zm19.76-7.83a1.75 1.75 0 0 0-1.998 0c-.128.09-.254.216-.457.42l-.571.57a.5.5 0 0 0 0 .707l2.248 2.248a.5.5 0 0 0 .707 0l.571-.571c.203-.203.33-.33.419-.458a1.75 1.75 0 0 0 0-1.998c-.09-.128-.216-.255-.42-.457l-.041-.043c-.203-.202-.33-.329-.458-.418Zm-4.44 2.405a.5.5 0 0 1 .707 0l2.248 2.248a.5.5 0 0 1 0 .707l-3.979 3.98a.25.25 0 0 1-.121.066l-3.377.774a.25.25 0 0 1-.3-.3l.775-3.373a.25.25 0 0 1 .066-.121z"/>
    </svg>
  );
}

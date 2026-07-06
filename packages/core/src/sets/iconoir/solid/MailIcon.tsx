import type { IconProps } from "../../../shared/types";

export function MailIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm3.43 4.136a.75.75 0 0 0-.86 1.228l5 3.5a.75.75 0 0 0 .86 0l5-3.5a.75.75 0 1 0-.86-1.228L12 11.585z" clipRule="evenodd"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function PasswordMobilePhoneIcon({
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
      <path d="M12 17v4m-2-1 4-2m-4 0 4 2m-9-3v4m-2-1 4-2m-4 0 4 2m12-3v4m-2-1 4-2m-4 0 4 2M7 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m-6-9h2m-1 12v.01"/>
    </svg>
  );
}

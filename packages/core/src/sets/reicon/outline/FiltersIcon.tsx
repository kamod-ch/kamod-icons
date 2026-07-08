import type { IconProps } from "../../../shared/types";

export function FiltersIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.8 6.8 0 0 1 5.25 8Zm.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586 6.75 6.75 0 0 1-7.058-3.529Zm8.504 3.126c.148.555.226 1.138.226 1.738a6.72 6.72 0 0 1-1.625 4.393 5.25 5.25 0 1 0 4.855-9.258 6.78 6.78 0 0 1-3.456 3.127Z" clipRule="evenodd"/>
    </svg>
  );
}

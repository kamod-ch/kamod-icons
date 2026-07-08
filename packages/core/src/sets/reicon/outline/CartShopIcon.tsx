import type { IconProps } from "../../../shared/types";

export function CartShopIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2 1.25a.75.75 0 0 0 0 1.5h1.182a.75.75 0 0 1 .744.654l1.354 10.45c.046.354.158.684.323.98a2.501 2.501 0 0 0 .647 4.916h.128a2.25 2.25 0 1 0 4.244 0h5.756a2.25 2.25 0 1 0 4.244 0H21a.75.75 0 0 0 0-1.5H6.25a1 1 0 1 1 0-2h12.49a3.25 3.25 0 0 0 3.233-2.924l.772-7.65a1.75 1.75 0 0 0-1.741-1.926H5.484l-.07-.54a2.25 2.25 0 0 0-2.232-1.96zm16.5 18.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-10.75.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm10.99-5.75c.898 0 1.65-.68 1.74-1.574l.773-7.65a.25.25 0 0 0-.249-.276H5.678l1.09 8.41a1.25 1.25 0 0 0 1.24 1.09z" clipRule="evenodd"/>
    </svg>
  );
}

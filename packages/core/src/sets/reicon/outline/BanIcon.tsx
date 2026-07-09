import type { IconProps } from "../../../shared/types";

export function BanIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M12 .25C18.49.25 23.75 5.51 23.75 12S18.49 23.75 12 23.75.25 18.49.25 12 5.51.25 12 .25ZM22.25 12c0-5.66-4.59-10.25-10.25-10.25-2.56 0-4.902.939-6.698 2.491l14.457 14.457A10.2 10.2 0 0 0 22.25 12Zm-3.552 7.759A10.2 10.2 0 0 1 12 22.25C6.34 22.25 1.75 17.66 1.75 12c0-2.56.939-4.902 2.491-6.698z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

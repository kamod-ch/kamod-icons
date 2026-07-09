import type { IconProps } from "../../../shared/types";

export function EthereumCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm12.015 1.989 3.029-1.752a.543.543 0 0 0 .197-.742L12.462 6.31a.542.542 0 0 0-.936 0L8.5 11.495a.54.54 0 0 0 .196.742l3.027 1.752a.54.54 0 0 0 .543 0Zm-.068.978 3.024-1.75c.1-.057.208.058.145.153l-2.922 4.348a.542.542 0 0 1-.9 0l-2.92-4.347c-.064-.095.044-.21.144-.153l3.021 1.75a.41.41 0 0 0 .408 0Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function Box3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M13.793 1.647a4.25 4.25 0 0 0-3.586 0l-6.5 3.024A4.25 4.25 0 0 0 1.25 8.524v7.021a4.25 4.25 0 0 0 2.49 3.868l6.5 2.96a4.25 4.25 0 0 0 3.52 0l6.5-2.96a4.25 4.25 0 0 0 2.49-3.868V8.524a4.25 4.25 0 0 0-2.457-3.853zm-2.953 1.36a2.75 2.75 0 0 1 2.32 0l6.5 3.024c.386.18.716.441.974.759l-3.107 1.393L8.725 3.99zM6.96 4.812 4.34 6.03c-.386.18-.716.441-.974.759L12 10.66l3.73-1.672zm9.79 5.363-3.999 1.792v9.183q.199-.056.388-.143l6.5-2.959a2.75 2.75 0 0 0 1.611-2.503V8.524q0-.18-.023-.356L18.25 9.502V13a.75.75 0 0 1-1.5 0zM2.773 8.168l8.478 3.8v9.182a3 3 0 0 1-.39-.143l-6.5-2.959a2.75 2.75 0 0 1-1.611-2.503V8.524q0-.18.023-.356Z" clipRule="evenodd"/>
    </svg>
  );
}

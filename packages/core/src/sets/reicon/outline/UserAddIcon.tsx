import type { IconProps } from "../../../shared/types";

export function UserAddIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" clipRule="evenodd"/><path fill="currentColor" d="M18 13.917a.75.75 0 0 1 .75.75v.583h.583a.75.75 0 0 1 0 1.5h-.583v.583a.75.75 0 0 1-1.5 0v-.583h-.583a.75.75 0 0 1 0-1.5h.583v-.583a.75.75 0 0 1 .75-.75Z"/><path fill="currentColor" fillRule="evenodd" d="M14.775 12.513A14.5 14.5 0 0 0 12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662.629.512 1.51.877 2.7 1.117 1.192.242 2.747.369 4.773.369 2.868 0 4.81-.254 6.12-.741 1.179-.44 1.877-1.082 2.25-1.892a4.75 4.75 0 1 0-5.596-7.604ZM6.71 14.972c-1.34.753-1.96 1.677-1.96 2.528 0 1.308.04 2.044.723 2.6.37.302.99.597 2.05.811 1.057.214 2.502.339 4.476.339 2.578 0 4.24-.213 5.311-.55a4.75 4.75 0 0 1-3.555-6.835A13 13 0 0 0 12 13.75c-2.105 0-3.973.482-5.289 1.222ZM14.751 16a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}

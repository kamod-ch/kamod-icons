import type { IconProps } from "../../../shared/types";

export function BitcoinCircleIcon({
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
      <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"><path d="M8.75 7.75a.75.75 0 0 0 0 1.5h.336v5.5H8.75a.75.75 0 0 0 0 1.5h1.125V17a.625.625 0 1 0 1.25 0v-.75h.75V17a.625.625 0 1 0 1.25 0v-.75h.375a2.5 2.5 0 0 0 1.332-4.616 2.5 2.5 0 0 0-1.707-3.856V7a.625.625 0 1 0-1.25 0v.75h-.75V7a.625.625 0 1 0-1.25 0v.75zm1.836 1.5v2h2.174a1 1 0 0 0-.01-2zm0 3.5v2H13.5a1 1 0 1 0 0-2z"/><path d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25ZM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12Z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}

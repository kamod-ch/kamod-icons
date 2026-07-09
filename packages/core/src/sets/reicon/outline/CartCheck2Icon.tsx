import type { IconProps } from "../../../shared/types";

export function CartCheck2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1 1.25a.75.75 0 0 0 0 1.5h1.182a.75.75 0 0 1 .744.654l1.354 10.45c.046.354.158.684.323.98a2.501 2.501 0 0 0 .647 4.916h.128a2.25 2.25 0 1 0 4.244 0h.63a.75.75 0 0 0 0-1.5H5.25a1 1 0 1 1 0-2h4.89a.75.75 0 0 0 0-1.5H7.007a1.25 1.25 0 0 1-1.24-1.09l-1.09-8.41h15.327a.25.25 0 0 1 .249.275l-.387 3.836a.75.75 0 1 0 1.492.15l.387-3.835a1.75 1.75 0 0 0-1.741-1.926H4.484l-.07-.54a2.25 2.25 0 0 0-2.232-1.96zM6.75 20.5a.75.75 0 0 1 .75-.75h.012a.75.75 0 1 1-.762.75Z" clipRule="evenodd"/><path fill="currentColor" d="M20.442 15.308a.625.625 0 0 1 0 .884l-2.5 2.5a.625.625 0 0 1-.886-.002l-1.5-1.512a.625.625 0 0 1 .888-.88l1.058 1.066 2.056-2.056a.625.625 0 0 1 .884 0Z"/><path fill="currentColor" fillRule="evenodd" d="M12.25 17a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM18 12.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z" clipRule="evenodd"/>
    </svg>
  );
}

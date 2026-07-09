import type { IconProps } from "../../../shared/types";

export function CartMinusIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M.25 2A.75.75 0 0 1 1 1.25h1.182c1.13 0 2.086.84 2.231 1.96l.07.54h15.521a1.75 1.75 0 0 1 1.741 1.926l-.387 3.835a.75.75 0 1 1-1.492-.15l.387-3.836a.25.25 0 0 0-.249-.275H4.678l1.09 8.41a1.25 1.25 0 0 0 1.24 1.09h3.132a.75.75 0 0 1 0 1.5H5.25a1 1 0 1 0 0 2h5.002a.75.75 0 0 1 0 1.5h-.63q.126.354.128.75a2.25 2.25 0 1 1-4.372-.75H5.25a2.5 2.5 0 0 1-.647-4.915 2.7 2.7 0 0 1-.323-.982L2.926 3.404a.75.75 0 0 0-.744-.653H1A.75.75 0 0 1 .25 2ZM7.5 19.75a.75.75 0 1 0 .012 0z" clipRule="evenodd"/><path fill="currentColor" d="M20 17.625a.625.625 0 1 0 0-1.25h-4a.625.625 0 1 0 0 1.25z"/><path fill="currentColor" fillRule="evenodd" d="M12.25 17a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM18 12.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z" clipRule="evenodd"/>
    </svg>
  );
}

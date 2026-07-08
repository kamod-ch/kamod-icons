import type { IconProps } from "../../../shared/types";

export function BugSlashIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M16.827 7.173A3.8 3.8 0 0 0 16 6.82V6c0-2.205-1.795-4-4-4S8 3.795 8 6v.823c-.96.274-1.75.922-2.216 1.785A2.67 2.67 0 0 1 3.667 6a1 1 0 0 0-2 0 4.67 4.67 0 0 0 3.666 4.553V12h-3a1 1 0 0 0 0 2h3v.667c0 1.153.311 2.226.831 3.169zM12 4c1.103 0 2 .897 2 2v.667h-4V6c0-1.103.897-2 2-2Zm-1 17.232v-3.99l-2.828 2.827A6.66 6.66 0 0 0 11 21.232ZM18.667 14h3a1 1 0 0 0 0-2h-3v-1.667c0-.236-.027-.465-.07-.688L13 15.243v5.99a6.67 6.67 0 0 0 5.063-3.858A2.664 2.664 0 0 1 20.333 20a1 1 0 0 0 2 0 4.67 4.67 0 0 0-3.736-4.572c.03-.252.07-.5.07-.761z"/><path d="M2.667 22.333a1 1 0 0 1-.707-1.708L20.627 1.96a1 1 0 1 1 1.414 1.415L3.373 22.04a1 1 0 0 1-.706.293Z"/></g>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function CheckListIcon({
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
      <path fill="currentColor" d="M7.041 4.019A.75.75 0 1 0 5.96 2.981L3.614 5.427 2.532 4.339a.75.75 0 1 0-1.064 1.058L3.093 7.03a.75.75 0 0 0 1.073-.01zm0 7A.75.75 0 0 0 5.96 9.981l-2.345 2.446-1.082-1.088a.75.75 0 1 0-1.064 1.058l1.625 1.632a.75.75 0 0 0 1.073-.01zm-.022 5.94a.75.75 0 0 1 .022 1.06l-2.875 3a.75.75 0 0 1-1.073.01l-1.625-1.632a.75.75 0 1 1 1.064-1.058l1.082 1.088L5.96 16.98a.75.75 0 0 1 1.06-.022ZM10.5 11.75a.75.75 0 0 0 0 1.5H22a.75.75 0 0 0 0-1.5zM9.75 5.5a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 0 1.5H10.5a.75.75 0 0 1-.75-.75Zm.75 13.25a.75.75 0 0 0 0 1.5H22a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
}

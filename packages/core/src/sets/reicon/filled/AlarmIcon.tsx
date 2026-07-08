import type { IconProps } from "../../../shared/types";

export function AlarmIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 22c4.836 0 8.757-3.884 8.757-8.675 0-4.79-3.92-8.674-8.757-8.674s-8.757 3.883-8.757 8.674S7.163 22 12 22Zm0-13.253c.403 0 .73.324.73.723v3.556l2.218 2.198a.72.72 0 0 1 0 1.022.735.735 0 0 1-1.032 0l-2.432-2.41a.72.72 0 0 1-.214-.51V9.47c0-.4.327-.723.73-.723ZM8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23Zm7.52 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996Z" clipRule="evenodd"/>
    </svg>
  );
}

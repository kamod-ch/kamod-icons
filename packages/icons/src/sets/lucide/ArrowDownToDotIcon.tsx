import type { IconProps } from "../../shared/types";

export function ArrowDownToDotIcon({
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
      <path d="M12 2v14m7-7-7 7-7-7"/><circle cx="12" cy="21" r="1"/>
    </svg>
  );
}

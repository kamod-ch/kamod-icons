import type { IconProps } from "../../../shared/types";

export function ArrowDownCircleIcon({
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
      <path d="M12 7v14m-3-3 3 3 3-3M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}

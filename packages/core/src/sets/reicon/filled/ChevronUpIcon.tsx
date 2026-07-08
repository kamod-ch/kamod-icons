import type { IconProps } from "../../../shared/types";

export function ChevronUpIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12.707 6.293a1 1 0 0 0-1.415 0L2.96 14.627a1 1 0 1 0 1.415 1.414L12 8.415l7.627 7.626a1 1 0 0 0 1.413 0 1 1 0 0 0 0-1.414z"/>
    </svg>
  );
}

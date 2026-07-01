import type { IconProps } from "../../../shared/types";

export function CarFanIcon({
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
      <path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm0 0h9l-1.914 4.912a1.7 1.7 0 0 1-2.925.428zm0 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925z"/>
    </svg>
  );
}

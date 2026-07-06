import type { IconProps } from "../../../shared/types";

export function ArrowsVerticalIcon({
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
      <path d="m8 7 4-4 4 4M8 17l4 4 4-4M12 3v18"/>
    </svg>
  );
}

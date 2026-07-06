import type { IconProps } from "../../../shared/types";

export function Target2Icon({
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
      <path d="m17 21-1.74-6M7 21l1.74-6M12 4V3m2 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/><path d="M18 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0"/>
    </svg>
  );
}

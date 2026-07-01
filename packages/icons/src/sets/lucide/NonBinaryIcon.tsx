import type { IconProps } from "../../shared/types";

export function NonBinaryIcon({
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
      <path d="M12 2v10M8.5 4l7 4m-7 0 7-4"/><circle cx="12" cy="17" r="5"/>
    </svg>
  );
}

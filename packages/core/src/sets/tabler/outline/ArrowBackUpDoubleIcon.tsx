import type { IconProps } from "../../../shared/types";

export function ArrowBackUpDoubleIcon({
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
      <path d="m13 14-4-4 4-4m-5 8-4-4 4-4"/><path d="M9 10h7a4 4 0 1 1 0 8h-1"/>
    </svg>
  );
}

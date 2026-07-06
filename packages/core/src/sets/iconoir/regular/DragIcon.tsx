import type { IconProps } from "../../../shared/types";

export function DragIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12 4 4m0 0v4m0-4h4m4 8 8-8m0 0v4m0-4h-4m-4 8-8 8m0 0v-4m0 4h4m4-8 8 8m0 0v-4m0 4h-4"/>
    </svg>
  );
}

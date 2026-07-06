import type { IconProps } from "../../../shared/types";

export function VueJsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 20.5 22.5 4h-4L12 14 5.5 4h-4z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.5 4h-4L12 7.5 9.5 4h-4"/>
    </svg>
  );
}

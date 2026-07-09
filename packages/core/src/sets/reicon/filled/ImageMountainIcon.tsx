import type { IconProps } from "../../../shared/types";

export function ImageMountainIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><circle cx="5.5" cy="4" r="2"/><path d="M12.66 6.401c-.666-.906-2.154-.906-2.82 0l-2.715 3.692-.84-1.142c-.666-.907-2.154-.907-2.82 0l-2.398 3.262c-.393.535-.451 1.234-.151 1.827s.898.96 1.562.96h13.045c.663 0 1.262-.368 1.562-.96s.241-1.292-.151-1.827l-4.273-5.812Z"/></g>
    </svg>
  );
}

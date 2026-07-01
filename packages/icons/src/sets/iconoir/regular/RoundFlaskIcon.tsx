import type { IconProps } from "../../../shared/types";

export function RoundFlaskIcon({
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
      <path stroke="currentColor" strokeLinejoin="round" d="M19 15H5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 4H8m7 .5v4.253c0 .763.445 1.445 1.078 1.871C18.287 12.11 20 14.617 20 17.462c0 .812-.114 1.596-.325 2.338-.215.75-.945 1.2-1.726 1.2H6.051c-.78 0-1.511-.45-1.726-1.2A8.5 8.5 0 0 1 4 17.462c0-2.845 1.713-5.353 3.922-6.838C8.555 10.198 9 9.516 9 8.754V4.5m4 2.51.01-.011M11 2.01l.01-.011"/>
    </svg>
  );
}

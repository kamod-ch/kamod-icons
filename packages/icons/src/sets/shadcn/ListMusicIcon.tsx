import type { IconProps } from "../../shared/types";

export function ListMusicIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15V6m-2.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M12 12H3m13-6H3m9 12H3"/>
    </svg>
  );
}

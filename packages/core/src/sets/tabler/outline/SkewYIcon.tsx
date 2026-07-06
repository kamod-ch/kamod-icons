import type { IconProps } from "../../../shared/types";

export function SkewYIcon({
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
      <path d="M4.326 19h15.348a1 1 0 0 0 .962-1.275l-3.429-12A1 1 0 0 0 16.246 5H7.754a1 1 0 0 0-.961.725l-3.429 12A1 1 0 0 0 4.326 19"/>
    </svg>
  );
}

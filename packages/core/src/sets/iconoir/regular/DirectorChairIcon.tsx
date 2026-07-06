import type { IconProps } from "../../../shared/types";

export function DirectorChairIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 12 5 21M5 3v9m14-9v9M5 12l14 9M4 12h16"/><path stroke="currentColor" strokeLinejoin="round" d="M5 4h14M5 7h14"/>
    </svg>
  );
}

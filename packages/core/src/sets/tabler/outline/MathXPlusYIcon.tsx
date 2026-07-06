import type { IconProps } from "../../../shared/types";

export function MathXPlusYIcon({
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
      <path d="m16 9 3 5.063M2 9l6 6m-6 0 6-6m14 0-4.8 9M10 12h4m-2-2v4"/>
    </svg>
  );
}

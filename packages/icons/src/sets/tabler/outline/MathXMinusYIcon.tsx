import type { IconProps } from "../../../shared/types";

export function MathXMinusYIcon({
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
      <path d="m2 9 6 6m-6 0 6-6m8 0 3 5.063M22 9l-4.8 9M10 12h4"/>
    </svg>
  );
}

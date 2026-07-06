import type { IconProps } from "../../../shared/types";

export function MathXPlusXIcon({
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
      <path d="m2 9 6 6m-6 0 6-6m8 0 6 6m-6 0 6-6m-12 3h4m-2-2v4"/>
    </svg>
  );
}

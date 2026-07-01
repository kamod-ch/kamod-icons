import type { IconProps } from "../../../shared/types";

export function LambdaIcon({
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
      <path d="m6 20 6.5-9m6.5 9C13 20 13 4 7 4"/>
    </svg>
  );
}

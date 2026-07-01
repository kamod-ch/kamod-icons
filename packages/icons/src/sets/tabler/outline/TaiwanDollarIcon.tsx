import type { IconProps } from "../../../shared/types";

export function TaiwanDollarIcon({
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
      <path d="M6 19a4 4 0 0 0 4-4V8m4 0v10a1 1 0 0 0 1.45.89L18 17.62M6 5h12M6 8h12"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function HtmlIcon({
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
      <path d="M13 16V8l2 5 2-5v8M1 16V8m4 0v8m-4-4h4m2-4h4M9 8v8m11-8v8h3"/>
    </svg>
  );
}

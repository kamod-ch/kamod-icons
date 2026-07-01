import type { IconProps } from "../../shared/types";

export function LigatureIcon({
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
      <path d="M14 12h2v8m-2 0h4M6 12h4m-4 8h4m-2 0V8a4 4 0 0 1 7.464-2"/>
    </svg>
  );
}

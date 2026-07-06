import type { IconProps } from "../../../shared/types";

export function AlphabetKoreanIcon({
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
      <path d="M7 7h6c0 2.5-1.593 8.474-6 10m9-12v14zm0 7h2"/>
    </svg>
  );
}

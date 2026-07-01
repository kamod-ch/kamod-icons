import type { IconProps } from "../../../shared/types";

export function AlphabetPolishIcon({
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
      <path d="M7 10h2a2 2 0 0 1 2 2v5H8a2 2 0 1 1 0-4h3m5-6v10m2-6-4 2m-3.5 4a1.5 1.5 0 0 0 0 3"/>
    </svg>
  );
}

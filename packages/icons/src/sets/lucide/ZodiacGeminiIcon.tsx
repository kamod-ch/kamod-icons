import type { IconProps } from "../../shared/types";

export function ZodiacGeminiIcon({
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
      <path d="M16 4.525v14.948M20 3A17 17 0 0 1 4 3m0 18a17 17 0 0 1 16 0M8 4.525v14.948"/>
    </svg>
  );
}

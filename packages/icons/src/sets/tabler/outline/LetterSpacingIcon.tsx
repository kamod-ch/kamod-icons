import type { IconProps } from "../../../shared/types";

export function LetterSpacingIcon({
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
      <path d="M5 12V6.5a2.5 2.5 0 0 1 5 0V12m0-4H5m8-4 3 8 3-8M5 18h14m-2 2 2-2-2-2M7 16l-2 2 2 2"/>
    </svg>
  );
}

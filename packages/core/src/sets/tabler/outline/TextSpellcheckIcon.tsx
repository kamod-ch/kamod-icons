import type { IconProps } from "../../../shared/types";

export function TextSpellcheckIcon({
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
      <path d="M5 15V7.5a3.5 3.5 0 0 1 7 0V15m-7-5h7m-2 8 3 3 7-7"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function LetterCaseToggleIcon({
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
      <path d="M3 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M14 19V8.5a3.5 3.5 0 0 1 7 0V19m-7-6h7m-11-1v7"/>
    </svg>
  );
}

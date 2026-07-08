import type { IconProps } from "../../../shared/types";

export function ArrowRightDownIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0l10.72 10.72V9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h7.19L5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
    </svg>
  );
}

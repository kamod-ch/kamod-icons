import type { IconProps } from "../../../shared/types";

export function FileSearchIcon({
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M12 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v4.5"/><path d="M14 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m4.5 2L21 22"/>
    </svg>
  );
}

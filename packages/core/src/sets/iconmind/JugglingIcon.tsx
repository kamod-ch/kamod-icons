import type { IconProps } from "../../shared/types";

export function JugglingIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M12 4c6 1 8 7 4 11"/>
    </svg>
  );
}

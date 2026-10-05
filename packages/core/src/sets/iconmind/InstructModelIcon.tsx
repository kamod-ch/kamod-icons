import type { IconProps } from "../../shared/types";

export function InstructModelIcon({
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
      <path d="M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8l4-4h2.5"/><path d="M8 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h5m-9 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h5"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function CircleInfoIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M12 1.333C6.119 1.333 1.333 6.12 1.333 12S6.12 22.667 12 22.667 22.667 17.88 22.667 12 17.88 1.333 12 1.333ZM13 17a1 1 0 0 1-2 0v-4.333h-.667a1 1 0 0 1 0-2h1c.92 0 1.667.747 1.667 1.666zm-1-8a1.335 1.335 0 0 1-1.333-1.333c0-.735.597-1.334 1.333-1.334A1.335 1.335 0 0 1 12 9Z"/>
    </svg>
  );
}

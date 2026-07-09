import type { IconProps } from "../../../shared/types";

export function Tasks2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M18.333 6H9.667A3.67 3.67 0 0 0 6 9.667v8.666A3.67 3.67 0 0 0 9.667 22h8.666A3.67 3.67 0 0 0 22 18.333V9.667A3.67 3.67 0 0 0 18.333 6Zm-.198 5.602-4.528 6a1 1 0 0 1-1.48.13l-2.146-2a1.001 1.001 0 0 1 1.364-1.464l1.333 1.244 3.861-5.114a1 1 0 1 1 1.596 1.204Z"/><path d="m4.755 4.725 9.232-1.372c.677-.1 1.337.218 1.683.815a1 1 0 0 0 1.73-1.003 3.64 3.64 0 0 0-3.707-1.79l-9.23 1.372A3.64 3.64 0 0 0 2.054 4.19a3.65 3.65 0 0 0-.681 2.724l1.303 8.774a1.001 1.001 0 0 0 1.979-.295L3.353 6.62a1.65 1.65 0 0 1 .31-1.238 1.65 1.65 0 0 1 1.092-.656Z"/></g>
    </svg>
  );
}

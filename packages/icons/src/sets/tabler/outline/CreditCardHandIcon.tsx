import type { IconProps } from "../../../shared/types";

export function CreditCardHandIcon({
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
      <path d="M2 4h9.914a3 3 0 0 1 1.92.695L19 9m-7.85 0H20a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9.3"/><path d="m3 8 7.2 4.7a1.803 1.803 0 0 0 2-3L8 7m-3 9h17"/>
    </svg>
  );
}

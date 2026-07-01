import type { IconProps } from "../../../shared/types";

export function BinaryTree2Icon({
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
      <path d="M12 3a3 3 0 0 1 2.616 4.47l3.274 3.742a3 3 0 1 1-1.505 1.318L13.11 8.787l-.11.042v6.342a3.001 3.001 0 1 1-2 0V8.829l-.111-.041-3.274 3.742a3 3 0 1 1-1.505-1.318L9.383 7.47A3 3 0 0 1 12 3"/>
    </svg>
  );
}

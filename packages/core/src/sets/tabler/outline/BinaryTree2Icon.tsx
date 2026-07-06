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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-7 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-7 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 8v8m-5.684-3.504 4.368-4.992m7 4.992-4.366-4.99"/>
    </svg>
  );
}

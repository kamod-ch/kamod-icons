import type { IconProps } from "../../../shared/types";

export function BinaryTreeIcon({
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
      <path d="M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-5-8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m10 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M5.058 18.306l2.88-4.606m2.123-3.397 2.877-4.604m-2.873 8.006 2.876 4.6M15.063 5.7l2.881 4.61"/>
    </svg>
  );
}

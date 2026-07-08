import type { IconProps } from "../../../shared/types";

export function BoltLightningIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M19.824 8.255a1.66 1.66 0 0 0-1.49-.922h-3.538l1.45-3.73a1.667 1.667 0 0 0-1.553-2.27h-5.56c-.696 0-1.325.439-1.565 1.092l-3.18 8.668a1.67 1.67 0 0 0 1.565 2.239h5.054l-2.303 8.059a.999.999 0 0 0 1.761.874L19.668 10a1.66 1.66 0 0 0 .156-1.745Z"/>
    </svg>
  );
}

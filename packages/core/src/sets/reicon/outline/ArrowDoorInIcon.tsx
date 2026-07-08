import type { IconProps } from "../../../shared/types";

export function ArrowDoorInIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.667 7.01V4.333C9.667 3.597 10.264 3 11 3h8.667C20.403 3 21 3.597 21 4.333v15.334c0 .736-.597 1.333-1.333 1.333H11a1.334 1.334 0 0 1-1.333-1.333V16.99m-4.334-1.323L9 12 5.333 8.333M9 12H1"/><path d="m20.724 3.53-4.428 2.746c-.392.243-.63.672-.63 1.133v9.183c0 .461.238.89.63 1.133l4.43 2.747"/></g>
    </svg>
  );
}

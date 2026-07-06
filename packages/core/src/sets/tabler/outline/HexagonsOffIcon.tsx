import type { IconProps } from "../../../shared/types";

export function HexagonsOffIcon({
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
      <path d="M4 18v-5l4-2 4 2v5l-4 2zm4-7V8m1.332-2.666L12 4l4 2v5m-4 2 .661-.331m2.684-1.341L16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18"/>
    </svg>
  );
}

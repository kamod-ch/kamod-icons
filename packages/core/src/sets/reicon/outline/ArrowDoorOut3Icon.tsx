import type { IconProps } from "../../../shared/types";

export function ArrowDoorOut3Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.667 7.667V4.333c0-.736-.598-1.333-1.334-1.333H5.667c-.736 0-1.334.597-1.334 1.333v15.334c0 .736.598 1.333 1.334 1.333h8.666c.736 0 1.334-.597 1.334-1.333v-3.334m3.666-8L23 12l-3.667 3.667M23 12h-8"/><path d="m4.61 3.53 4.427 2.746c.392.243.631.672.631 1.133v9.183c0 .461-.239.89-.63 1.133l-4.43 2.747"/></g>
    </svg>
  );
}

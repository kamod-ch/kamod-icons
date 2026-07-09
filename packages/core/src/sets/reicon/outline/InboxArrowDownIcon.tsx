import type { IconProps } from "../../../shared/types";

export function InboxArrowDownIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.333 7.667 12 11 8.667 7.667M12 11V3.667M21.619 13h-5.952v1.333c0 .736-.598 1.334-1.334 1.334H9.667a1.334 1.334 0 0 1-1.334-1.334V13h-5.95"/><path d="M16 3.667h.183c1.096 0 2.081.67 2.482 1.692l2.818 7.172c.122.31.184.641.184.974v4.162A2.666 2.666 0 0 1 19 20.333H5a2.666 2.666 0 0 1-2.667-2.666v-4.162c0-.333.063-.664.184-.974l2.818-7.172a2.67 2.67 0 0 1 2.482-1.692H8"/></g>
    </svg>
  );
}

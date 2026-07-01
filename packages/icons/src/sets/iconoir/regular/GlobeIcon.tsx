import type { IconProps } from "../../../shared/types";

export function GlobeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.5 12.5 5.5 2L7 18l1 3m9-.5-.5-2.5-2.5-1v-3.5l3-1 4.5.5M19 5.5 18.5 7l-3.5.5v3l2.5-1h2l2 1m-19 0 2.5-2L7.5 8l2-3-1-2"/>
    </svg>
  );
}

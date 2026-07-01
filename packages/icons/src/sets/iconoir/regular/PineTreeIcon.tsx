import type { IconProps } from "../../../shared/types";

export function PineTreeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2 7 6.643S10.042 7 12 7s5-.357 5-.357zM8.5 7 5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 11.5 3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3"/>
    </svg>
  );
}

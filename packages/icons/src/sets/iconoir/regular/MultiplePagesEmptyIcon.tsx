import type { IconProps } from "../../../shared/types";

export function MultiplePagesEmptyIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 2h9.5L21 6.5V19"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 20.5v-14A1.5 1.5 0 0 1 4.5 5h9.752a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 18 8.75V20.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 3 20.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 5v3.4a.6.6 0 0 0 .6.6H18"/>
    </svg>
  );
}

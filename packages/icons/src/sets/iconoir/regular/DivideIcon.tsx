import type { IconProps } from "../../../shared/types";

export function DivideIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 21v-9a5 5 0 0 0-5-5H3m9 14v-9a5 5 0 0 1 5-5h4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 3 3 7l4 4m10-8 4 4-4 4"/>
    </svg>
  );
}

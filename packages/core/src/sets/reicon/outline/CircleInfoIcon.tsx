import type { IconProps } from "../../../shared/types";

export function CircleInfoIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.667c5.339 0 9.667-4.328 9.667-9.667S17.339 2.333 12 2.333 2.333 6.661 2.333 12 6.661 21.667 12 21.667"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v-4.667a.667.667 0 0 0-.667-.666h-1"/><path fill="currentColor" strokeWidth="1.333" d="M12 9a1.335 1.335 0 0 1-1.333-1.333c0-.735.597-1.334 1.333-1.334A1.335 1.335 0 0 1 12 9Z"/>
    </svg>
  );
}

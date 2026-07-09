import type { IconProps } from "../../../shared/types";

export function Tasks2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10.663 15 2.145 2 4.53-6"/><path d="M18.333 7H9.667A2.666 2.666 0 0 0 7 9.667v8.666A2.666 2.666 0 0 0 9.667 21h8.666A2.666 2.666 0 0 0 21 18.333V9.667A2.666 2.666 0 0 0 18.333 7"/><path d="M16.535 3.667a2.66 2.66 0 0 0-2.695-1.303L4.608 3.736a2.666 2.666 0 0 0-2.245 3.03l1.304 8.774"/></g>
    </svg>
  );
}

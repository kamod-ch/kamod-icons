import type { IconProps } from "../../../shared/types";

export function GlobePointerIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.565 21.589a10 10 0 0 1-1.232.078c-5.338 0-9.666-4.328-9.666-9.667s4.328-9.667 9.666-9.667A9.667 9.667 0 0 1 21 12q0 .175-.006.349"/><path d="m14.835 14.357 7.92 2.894a.373.373 0 0 1-.015.705l-3.625 1.16-1.16 3.625a.373.373 0 0 1-.706.015l-2.893-7.92a.373.373 0 0 1 .479-.479"/><path d="M21 12c0-2.21-4.328-4-9.667-4s-9.666 1.79-9.666 4c0 2.096 3.896 3.816 8.857 3.986"/><path d="M15.277 10.377c-.32-4.566-1.964-8.044-3.944-8.044-2.209 0-4 4.328-4 9.667s1.791 9.667 4 9.667"/></g>
    </svg>
  );
}

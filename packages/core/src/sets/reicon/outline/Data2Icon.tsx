import type { IconProps } from "../../../shared/types";

export function Data2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-2h12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 4h-4q-3 0-3 3v10q0 3 3 3h4"/>
    </svg>
  );
}

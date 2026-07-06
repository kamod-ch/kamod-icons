import type { IconProps } from "../../shared/types";

export function StethoscopeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 1 0 12 0V4a2 2 0 0 0-2-2h-1a.213.213 0 0 0 .15.362.2.2 0 0 0 .15-.062"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 15v1a6 6 0 1 0 12 0v-4m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}

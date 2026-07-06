import type { IconProps } from "../../shared/types";

export function CogIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66-4 6.93"/>
    </svg>
  );
}

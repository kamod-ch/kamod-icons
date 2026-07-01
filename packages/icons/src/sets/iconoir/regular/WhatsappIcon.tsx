import type { IconProps } from "../../../shared/types";

export function WhatsappIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338L2 21.5l.832-5.5A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.96 13.868 2.08-.406 1.96.753v1.823c0 .607-.522 1.07-1.11.94-1.523-.334-4.29-1.174-6.212-3.11-1.83-1.843-2.455-4.41-2.668-5.827C6.925 7.474 7.374 7 7.943 7h1.894l.735 1.969-.389 2.101"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function WristwatchIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 16.472V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3.528m0-8.944V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.528"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 12h-2v-2"/>
    </svg>
  );
}

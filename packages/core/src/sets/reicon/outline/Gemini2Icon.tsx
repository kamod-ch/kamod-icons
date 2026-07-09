import type { IconProps } from "../../../shared/types";

export function Gemini2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 2a19.45 19.45 0 0 0 20 0M2 22a19.45 19.45 0 0 1 20 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.3 3.58.13.24a17.63 17.63 0 0 1-.1 16.59m13.34 0a17.68 17.68 0 0 1-.1-16.59l.13-.24"/>
    </svg>
  );
}

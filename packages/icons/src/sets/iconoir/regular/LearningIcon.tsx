import type { IconProps } from "../../../shared/types";

export function LearningIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.818 22v-2.857C6.52 16.166 3 14.572 3 10c0-4.57 2.727-8.056 8.182-8 3.927.042 7.636 2.286 7.636 6.858L21 12.286c0 2.286-2.182 2.286-2.182 2.286s.546 5.714-4.364 5.714V22"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path stroke="currentColor" strokeDasharray="0.3 2" strokeLinecap="round" strokeLinejoin="round" d="M11 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}

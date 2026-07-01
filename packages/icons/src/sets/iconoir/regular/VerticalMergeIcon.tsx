import type { IconProps } from "../../../shared/types";

export function VerticalMergeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v8m0 0 3.5-3.5M12 10 8.5 6.5M12 22v-8m0 0 3.5 3.5M12 14l-3.5 3.5M3 14h18M3 10h18"/>
    </svg>
  );
}

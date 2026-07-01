import type { IconProps } from "../../../shared/types";

export function BrandSentryIcon({
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
      <path d="M3 18a1.93 1.93 0 0 0 .306 1.076A2 2 0 0 0 4.89 20c.646.033-.537 0 .11 0h3a4.99 4.99 0 0 0-3.66-4.81q.839-1.459 2.04-3.531A9 9 0 0 1 12 20h7a2 2 0 0 0 1.84-2.75L13.74 5a2 2 0 0 0-3.5 0L8.4 8.176C12.882 10.226 16 14.747 16 20"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function DepthIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M5 4h14M3 16.01l.01-.011m18 .011-.01-.011M4 12.01l.01-.011m16 .011-.01-.011M5 8.01l.01-.011m14 .011L19 7.999M12 7v10m0-10-1.5 1.5M12 7l1.5 1.5M12 17l-3-3m3 3 3-3"/>
    </svg>
  );
}

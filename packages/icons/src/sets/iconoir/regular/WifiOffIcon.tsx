import type { IconProps } from "../../../shared/types";

export function WifiOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 19.51.01-.011M3 3l18 18M2 8a17 17 0 0 1 3.757-2.14M22 8c-3.572-2.68-7.854-3.763-12-3.252M5 12c1.333-1 2.889-1.667 4.518-2M19 12a11.3 11.3 0 0 0-4.282-1.95M8.5 15.5c2.25-1.4 4.75-1.4 7 0"/>
    </svg>
  );
}

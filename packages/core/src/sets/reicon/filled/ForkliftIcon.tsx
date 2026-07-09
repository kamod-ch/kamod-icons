import type { IconProps } from "../../../shared/types";

export function ForkliftIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M13.907 4.347a2.35 2.35 0 0 0-2.24-1.68h-4A2.336 2.336 0 0 0 5.333 5v5.667H3.667A3.67 3.67 0 0 0 0 14.333V18a3.34 3.34 0 0 0 3.333 3.333A3.34 3.34 0 0 0 6.6 18.667h2.8a3.34 3.34 0 0 0 3.265 2.666A3.34 3.34 0 0 0 16 18v-5.952q0-.524-.147-1.027l-1.947-6.673ZM7.333 5c0-.184.15-.333.334-.333h4c.146 0 .278.098.32.24l1.68 5.76H7.333zm-4 14.333C2.6 19.333 2 18.735 2 18s.599-1.333 1.333-1.333 1.334.598 1.334 1.333-.599 1.333-1.334 1.333Zm9.334 0c-.735 0-1.334-.598-1.334-1.333s.599-1.333 1.334-1.333S14 17.265 14 18s-.599 1.333-1.333 1.333Zm10.333 0h-3.333a.333.333 0 0 1-.334-.333V2.333a1 1 0 0 0-2 0V19a2.336 2.336 0 0 0 2.334 2.333H23a1 1 0 0 0 0-2Z"/>
    </svg>
  );
}

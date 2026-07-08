import type { IconProps } from "../../../shared/types";

export function BoxArchiveIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M20.333 2.667H3.667A2.336 2.336 0 0 0 1.333 5v2a2.33 2.33 0 0 0 2 2.3v8.367A3.67 3.67 0 0 0 7 21.333h10a3.67 3.67 0 0 0 3.667-3.666V9.3a2.33 2.33 0 0 0 2-2.3V5a2.336 2.336 0 0 0-2.334-2.333Zm-5.666 10.666H9.333a1 1 0 0 1 0-2h5.334a1 1 0 0 1 0 2Zm6-6.333c0 .184-.15.333-.334.333H3.667A.333.333 0 0 1 3.333 7V5c0-.184.15-.333.334-.333h16.666c.184 0 .334.149.334.333z"/>
    </svg>
  );
}

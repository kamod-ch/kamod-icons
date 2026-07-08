import type { IconProps } from "../../../shared/types";

export function DrawCompassIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v1.667m-1.273 5.009-7.06 12.99m14.703-3.612 1.963 3.613m-7.06-12.991 3.184 5.859M12 9a2.666 2.666 0 1 0 0-5.333A2.666 2.666 0 0 0 12 9m6.667 3.865A9.3 9.3 0 0 1 12 15.667a9.3 9.3 0 0 1-6.667-2.802"/>
    </svg>
  );
}

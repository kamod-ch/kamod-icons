import type { IconProps } from "../../../shared/types";

export function MsgSmileIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 2.333A9.667 9.667 0 0 0 2.333 12c0 1.759.478 3.403 1.298 4.823.573 1.074-.071 3.616-1.298 4.844 1.667.09 3.863-.663 4.844-1.298A9.6 9.6 0 0 0 12 21.666a9.667 9.667 0 1 0 0-19.333"/><path d="M7.99 16c1.026 1.03 2.445 1.667 4.01 1.667s2.975-.634 4-1.656"/></g>
    </svg>
  );
}

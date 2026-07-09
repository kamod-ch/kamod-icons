import type { IconProps } from "../../../shared/types";

export function MsgWritingIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.333A9.667 9.667 0 0 0 2.333 12c0 1.759.478 3.403 1.298 4.823.573 1.074-.071 3.616-1.298 4.844 1.667.09 3.863-.663 4.844-1.298A9.6 9.6 0 0 0 12 21.666a9.667 9.667 0 1 0 0-19.333"/><path fill="currentColor" strokeWidth="1.333" d="M12 13.333A1.334 1.334 0 0 1 10.667 12a1.334 1.334 0 0 1 2.666 0c0 .735-.597 1.333-1.333 1.333Z" opacity=".75"/><path fill="currentColor" strokeWidth="1.333" d="M7.333 13.333A1.334 1.334 0 0 1 6 12a1.334 1.334 0 0 1 2.667 0c0 .735-.598 1.333-1.334 1.333Z"/><path fill="currentColor" strokeWidth="1.333" d="M16.667 13.333A1.335 1.335 0 0 1 15.333 12 1.334 1.334 0 0 1 18 12c0 .735-.597 1.333-1.333 1.333Z" opacity=".5"/>
    </svg>
  );
}

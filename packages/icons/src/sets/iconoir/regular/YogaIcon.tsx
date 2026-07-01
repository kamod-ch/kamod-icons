import type { IconProps } from "../../../shared/types";

export function YogaIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.571 15.004.858 1.845s3.857.819 3.857 2.767C19.286 21 17.57 21 17.57 21H13l-2.25-1.25"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.429 15.004-.857 1.845s-3.858.819-3.858 2.767C4.714 21 6.43 21 6.43 21H8.5l2.25-1.25L13.5 18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 15.926s2.143-.461 3.429-.922C7.714 8.546 11.57 9.007 12 9.007s4.286-.461 5.571 5.997c1.286.46 3.429.922 3.429.922M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}

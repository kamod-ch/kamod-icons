import type { IconProps } from "../../../shared/types";

export function AtIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3 12a9 9 0 0 1 18 0c0 1.148-.208 2.066-.556 2.692-.33.594-.773.916-1.357 1-.576.082-1.07-.127-1.447-.53A2.48 2.48 0 0 1 17 13.5V8.25a1 1 0 0 0-1.973-.23 5 5 0 1 0 .477 7.547c.181.351.408.677.677.963.767.818 1.889 1.327 3.19 1.142 1.293-.185 2.236-.954 2.822-2.008C22.76 14.64 23 13.352 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11a1 1 0 1 0 0-2 9 9 0 0 1-9-9Zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd"/>
    </svg>
  );
}

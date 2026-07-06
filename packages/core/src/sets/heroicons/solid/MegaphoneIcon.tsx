import type { IconProps } from "../../../shared/types";

export function MegaphoneIcon({
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
      <path d="M16.881 4.345A23.1 23.1 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.6 21.6 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17 17 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.7 21.7 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905m1.379-.605a23.2 23.2 0 0 1 1.24 7.51 23.2 23.2 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.6 24.6 0 0 0 1.415-6.43 3 3 0 0 0 .836-2.078 3 3 0 0 0-.836-2.078 24.7 24.7 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516q.089.24.17.483Z"/>
    </svg>
  );
}

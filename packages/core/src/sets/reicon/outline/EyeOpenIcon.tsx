import type { IconProps } from "../../../shared/types";

export function EyeOpenIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M1.859 8C3.674 6.149 6.203 5 9 5s5.326 1.148 7.141 3"/><circle cx="9" cy="10.5" r="2.75"/><path d="M4.021 6.328 2.75 4.25m4.55.894-.477-2.375m7.156 3.559L15.25 4.25m-4.55.894.477-2.375"/></g>
    </svg>
  );
}

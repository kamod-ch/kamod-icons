import type { IconProps } from "../../../shared/types";

export function SideProfileIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.25 16.25v-2.5h1.639a2 2 0 0 0 1.995-1.856l.112-1.543L16.5 9.75l-1.5-2a6.007 6.007 0 0 0-7.293-5.865c-2.266.473-4.097 2.305-4.571 4.57-.595 2.846.84 5.418 3.114 6.6v3.195"/><circle cx="12.25" cy="7.25" r=".75" fill="currentColor"/></g>
    </svg>
  );
}

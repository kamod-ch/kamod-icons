import type { IconProps } from "../../../shared/types";

export function MusicPlaylist2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5M6 4.5h12M9 2h6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.89 19.11a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.91 18.2a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74m-3.65-4.37 5.02-1.37"/>
    </svg>
  );
}

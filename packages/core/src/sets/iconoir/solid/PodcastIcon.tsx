import type { IconProps } from "../../../shared/types";

export function PodcastIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.528 15a6 6 0 1 1 8.944 0"/><path fill="currentColor" fillRule="evenodd" d="M9.25 11a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clipRule="evenodd"/><path fill="currentColor" d="M15.078 21.487a2.75 2.75 0 0 1-2.713 2.297h-.611a2.75 2.75 0 0 1-2.713-2.297l-.509-3.054c-.24-1.438.899-2.548 2.002-3.283 1.378-.919 1.852-.81 3.05-.01 1.058.704 2.242 1.855 2.002 3.293z"/>
    </svg>
  );
}

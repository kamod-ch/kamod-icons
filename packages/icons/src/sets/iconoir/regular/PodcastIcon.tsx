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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 19a9.99 9.99 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.99 9.99 0 0 1-4 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.528 15a6 6 0 1 1 8.944 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-1.924 3.283.815-.543a2 2 0 0 1 2.218 0l.815.543a2 2 0 0 1 .863 1.993l-.509 3.053A2 2 0 0 1 12.307 23h-.612a2 2 0 0 1-1.973-1.671l-.508-3.053a2 2 0 0 1 .863-1.993"/>
    </svg>
  );
}

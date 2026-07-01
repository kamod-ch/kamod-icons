import type { IconProps } from "../../../shared/types";

export function PanoramaEnlargeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5c2.995 0 7.235.692 8.576.925a.58.58 0 0 1 .48.503c.13 1.028.444 3.691.444 5.572 0 1.88-.313 4.544-.444 5.572a.58.58 0 0 1-.48.503c-1.34.233-5.58.925-8.576.925-2.995 0-7.235-.692-8.576-.925a.58.58 0 0 1-.48-.503C2.814 16.544 2.5 13.881 2.5 12c0-1.88.313-4.544.444-5.572a.58.58 0 0 1 .48-.503C4.764 5.692 9.004 5 12 5"/>
    </svg>
  );
}

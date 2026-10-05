import type { IconProps } from "../../shared/types";

export function DatasetVersionIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 4.25A1.75 1.75 0 0 1 7.75 2.5h11.5A1.75 1.75 0 0 1 21 4.25 1.75 1.75 0 0 1 19.25 6H7.75A1.75 1.75 0 0 1 6 4.25M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 3.5h12"/>
    </svg>
  );
}

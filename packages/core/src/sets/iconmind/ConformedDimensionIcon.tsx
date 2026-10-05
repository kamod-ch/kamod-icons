import type { IconProps } from "../../shared/types";

export function ConformedDimensionIcon({
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
      <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Zm5 5v3m-7 3v-3h14v3M2 17a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm13.5 0a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2Z"/>
    </svg>
  );
}

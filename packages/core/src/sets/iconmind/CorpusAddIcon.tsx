import type { IconProps } from "../../shared/types";

export function CorpusAddIcon({
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
      <path d="M13 2H6v14h10V5"/><path d="M16 8H9v14h10V11m-2.5-6.5h5M19 2v5"/>
    </svg>
  );
}

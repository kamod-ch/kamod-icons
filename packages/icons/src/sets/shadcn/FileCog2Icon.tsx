import type { IconProps } from "../../shared/types";

export function FileCog2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6m-8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-5v1m0 4v1m2.6-4.5-.87.5m-3.46 2-.87.5m5.2 0-.87-.5m-3.46-2-.87-.5"/>
    </svg>
  );
}

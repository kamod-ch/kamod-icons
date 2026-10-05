import type { IconProps } from "../../shared/types";

export function TailSamplingIcon({
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
      <path d="M4 3h16M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6 6 6 0 0 1-6 6H8a6 6 0 0 1-6-6m4 0h4.5"/><path d="m12 9 3 3 3-3m-3 3v3"/>
    </svg>
  );
}

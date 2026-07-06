import type { IconProps } from "../../../shared/types";

export function BoxIsoIcon({
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
      <path fill="currentColor" d="m2.695 7.185 9 4 .61-1.37-9-4zM12.75 21.5v-11h-1.5v11zm-.445-10.315 9-4-.61-1.37-9 4z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.5 4.5 8.644 3.842a.6.6 0 0 1 .356.548v3.61"/>
    </svg>
  );
}

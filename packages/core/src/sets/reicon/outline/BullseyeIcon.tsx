import type { IconProps } from "../../../shared/types";

export function BullseyeIcon({
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
      <path fill="currentColor" d="M12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25Z"/><path fill="currentColor" d="M10.85 6.365a.75.75 0 1 1 .3 1.47A4.252 4.252 0 0 0 12 16.25a4.25 4.25 0 0 0 4.165-3.4.75.75 0 0 1 1.47.299 5.752 5.752 0 0 1-11.385-1.15 5.75 5.75 0 0 1 4.6-5.634Z"/><path fill="currentColor" fillRule="evenodd" d="M15.31 9.75h3.069a2.25 2.25 0 0 0 1.59-.659l2.135-2.134c.63-.63.183-1.707-.708-1.707H18.75V2.604c0-.891-1.077-1.338-1.707-.708L14.909 4.03a2.25 2.25 0 0 0-.659 1.591V8.69l-2.78 2.78a.75.75 0 1 0 1.06 1.061zm1.94-4.06V3.81l-1.28 1.281a.75.75 0 0 0-.22.53V7.19zm-.44 2.56 1.5-1.5h1.88l-1.281 1.28a.75.75 0 0 1-.53.22z" clipRule="evenodd"/>
    </svg>
  );
}

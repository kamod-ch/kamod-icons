import type { IconProps } from "../../../shared/types";

export function KeyframesCoupleIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.066 5.18 12.56 6.874l-1.121-.997 1.505-1.693a2.75 2.75 0 0 1 4.11 0l5.324 5.99a2.75 2.75 0 0 1 0 3.653m0 0-5.324 5.99a2.75 2.75 0 0 1-4.11 0l-1.505-1.693 1.12-.997 1.506 1.693a1.25 1.25 0 0 0 1.868 0l5.324-5.99a1.25 1.25 0 0 0 0-1.66l-5.324-5.99a1.25 1.25 0 0 0-1.868 0" clipRule="evenodd"/><path fill="currentColor" d="M6.945 4.184a2.75 2.75 0 0 1 4.11 0l5.325 5.99a2.75 2.75 0 0 1 0 3.653l-5.324 5.99a2.75 2.75 0 0 1-4.111 0l-5.324-5.99a2.75 2.75 0 0 1 0-3.654z"/>
    </svg>
  );
}

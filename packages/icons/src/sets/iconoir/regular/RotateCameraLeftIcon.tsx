import type { IconProps } from "../../../shared/types";

export function RotateCameraLeftIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.05 3v4.497c0 .278.226.503.504.503v0c.2 0 .38-.119.466-.3A10 10 0 0 1 12.05 2c5.186 0 9.45 3.947 9.951 9m0 10v-4.497a.503.503 0 0 0-.503-.503v0a.52.52 0 0 0-.465.3A10 10 0 0 1 12 22c-5.185 0-9.448-3.947-9.95-9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 16.4V9.394a.6.6 0 0 1 .6-.6h1.173a.6.6 0 0 0 .504-.275l1.446-2.244A.6.6 0 0 1 10.227 6h3.546a.6.6 0 0 1 .504.275l1.446 2.244a.6.6 0 0 0 .504.275H17.4a.6.6 0 0 1 .6.6V16.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}

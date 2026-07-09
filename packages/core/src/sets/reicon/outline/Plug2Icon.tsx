import type { IconProps } from "../../../shared/types";

export function Plug2Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.805 11.619 5.576 5.576a1.33 1.33 0 0 1 0 1.885l-.373.373a5.277 5.277 0 0 1-7.461 0h0a5.277 5.277 0 0 1 0-7.461l.373-.373a1.33 1.33 0 0 1 1.885 0M2.333 21.667l2.212-2.212m3.382-6.715L10 10.667m1.26 5.406L13.333 14m-1.714-7.195 5.576 5.576a1.33 1.33 0 0 0 1.885 0l.373-.373a5.277 5.277 0 0 0 0-7.461h0a5.277 5.277 0 0 0-7.461 0l-.373.373a1.33 1.33 0 0 0 0 1.885m10.048-4.472-2.212 2.212"/>
    </svg>
  );
}

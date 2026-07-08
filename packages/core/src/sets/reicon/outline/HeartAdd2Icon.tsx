import type { IconProps } from "../../../shared/types";

export function HeartAdd2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.2 22a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6m1.79-4.74h-3.58m1.79-1.75v3.59"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 8.69c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.55 5.55 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"/>
    </svg>
  );
}

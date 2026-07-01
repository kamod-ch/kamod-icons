import type { IconProps } from "../../../shared/types";

export function LocationIcon({
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
      <path d="M20.891 2.006 20.997 2l.13.008.09.016.123.035.107.046.1.057.09.067.082.075.052.059.082.116.052.096q.07.15.09.316l.005.106q0 .113-.024.22l-.035.123-6.532 18.077A1.55 1.55 0 0 1 14 22.32a1.55 1.55 0 0 1-1.329-.747l-.065-.127-3.352-6.702-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07 18.017-6.506.106-.03.108-.018z"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function DropletSnowFlakeInIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="m12 2-.516-.544zm.517-.544.001.002.005.004.018.018.07.067.26.254a53 53 0 0 1 3.71 4.068c1.014 1.24 2.043 2.64 2.823 4.024.768 1.364 1.346 2.805 1.346 4.107a8.75 8.75 0 1 1-17.5 0c0-1.302.578-2.743 1.346-4.107.78-1.384 1.81-2.783 2.823-4.024a53 53 0 0 1 3.97-4.322l.07-.067.018-.018.007-.006.516-.49zM12 2l.517-.544zm.75 8a.75.75 0 0 0-1.5 0v2.194l-1.872-1.092a.75.75 0 1 0-.756 1.296l1.89 1.102-1.89 1.102a.75.75 0 1 0 .756 1.296l1.872-1.092V17a.75.75 0 0 0 1.5 0v-2.194l1.872 1.092a.75.75 0 0 0 .756-1.296l-1.89-1.102 1.89-1.102a.75.75 0 1 0-.756-1.296l-1.872 1.092z" clipRule="evenodd"/>
    </svg>
  );
}

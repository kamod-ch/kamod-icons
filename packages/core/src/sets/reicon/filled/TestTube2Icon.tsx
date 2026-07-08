import type { IconProps } from "../../../shared/types";

export function TestTube2Icon({
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
      <path fill="currentColor" d="M14.87 2.224a.76.76 0 1 0-1.078 1.072l.694.697-6.95 6.98.69.076a2.995 2.995 0 0 1 2.642 2.65c.058.53.395.985.878 1.195l1.967.816 6.22-6.246.768.772a.76.76 0 0 0 1.078-1.072zM4.128 14.396l2.038-2.047 1.892.211a1.475 1.475 0 0 1 1.299 1.306c.118 1.073.802 2 1.792 2.426l1.405.583-2.98 2.992a3.84 3.84 0 0 1-5.446 0 3.88 3.88 0 0 1 0-5.471Z"/>
    </svg>
  );
}

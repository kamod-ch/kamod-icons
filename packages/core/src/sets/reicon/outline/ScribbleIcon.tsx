import type { IconProps } from "../../../shared/types";

export function ScribbleIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.333 13.175s5.432-5.61 8.523-8.042c2.067-1.625 3.284-1.785 4.033-1.037 1.367 1.361-.542 3.89-3.144 7.35s-4.484 5.442-3.058 6.787c1.406 1.328 4.316-1.642 5.4-2.853s3.558-3.896 4.77-2.767c1.074 1-.52 3.416-1.084 4.496s-1.257 2.195-.433 2.94c1.165 1.055 2.993-1.168 2.993-1.168"/>
    </svg>
  );
}

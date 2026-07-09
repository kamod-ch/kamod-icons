import type { IconProps } from "../../../shared/types";

export function PaperPlane2Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.084 2.916 10.209 13.791M21.263 3.64l-5.539 17.23a.717.717 0 0 1-1.303.142L10.21 13.79 2.988 9.579a.717.717 0 0 1 .141-1.303l17.23-5.539a.718.718 0 0 1 .904.903"/>
    </svg>
  );
}

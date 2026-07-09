import type { IconProps } from "../../../shared/types";

export function Password2Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.333 5v14M3.012 10.93l2.655.862M4.025 14.05l1.642-2.258m1.641 2.258-1.641-2.258m2.654-.862-2.654.862m0-2.792v2.792m5.678-.862 2.655.862m-1.641 2.258L14 11.791m1.641 2.259L14 11.791m2.655-.861L14 11.791M14 9v2.792"/>
    </svg>
  );
}

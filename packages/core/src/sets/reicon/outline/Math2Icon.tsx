import type { IconProps } from "../../../shared/types";

export function Math2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.42 5.64h7.28m-19.4 0h7.28m4.84 9.69h7.28m-7.28 6.06h7.28M18.09 9.27V2M2.3 22l7.28-7.27m0 7.27L2.3 14.73"/>
    </svg>
  );
}

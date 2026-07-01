import type { IconProps } from "../../../shared/types";

export function TestTubeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426 1.967-1.065-6.554-4.588-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.091 11.02c-2.876-.853-4.403.781-7.28-.071"/>
    </svg>
  );
}

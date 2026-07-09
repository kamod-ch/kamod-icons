import type { IconProps } from "../../../shared/types";

export function More22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9.32c1.19 0 2.16-.97 2.16-2.16S13.19 5 12 5s-2.16.97-2.16 2.16.97 2.16 2.16 2.16M6.79 19c1.19 0 2.16-.97 2.16-2.16s-.97-2.16-2.16-2.16-2.16.97-2.16 2.16S5.59 19 6.79 19m10.42 0c1.19 0 2.16-.97 2.16-2.16s-.97-2.16-2.16-2.16-2.16.97-2.16 2.16.97 2.16 2.16 2.16"/>
    </svg>
  );
}

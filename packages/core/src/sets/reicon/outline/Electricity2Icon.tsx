import type { IconProps } from "../../../shared/types";

export function Electricity2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16m-1-14v3m5-3v3M12 22v-6"/>
    </svg>
  );
}

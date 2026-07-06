import type { IconProps } from "../../../shared/types";

export function GlassOffIcon({
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
      <path d="M8 21h8m-4-5v5m5-16 1 6c0 .887-.233 1.685-.646 2.37m-2.083 1.886c-.941.48-2.064.744-3.271.744-3.314 0-6-1.988-6-5l.711-4.268"/><path d="M10.983 6.959q.494.04 1.017.041c2.761 0 5-.895 5-2s-2.239-2-5-2c-1.716 0-3.23.346-4.13.872M3 3l18 18"/>
    </svg>
  );
}

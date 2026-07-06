import type { IconProps } from "../../../shared/types";

export function HospitalCircleIcon({
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
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m2 5a1 1 0 0 0-1 1v2.999h-2V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3.001h2V16a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"/>
    </svg>
  );
}

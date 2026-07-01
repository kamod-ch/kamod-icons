import type { IconProps } from "../../../shared/types";

export function HomeTemperatureInIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 8 9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-10.5V14m0-2h2m-2-3h2"/>
    </svg>
  );
}

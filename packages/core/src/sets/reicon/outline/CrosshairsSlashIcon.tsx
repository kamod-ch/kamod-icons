import type { IconProps } from "../../../shared/types";

export function CrosshairsSlashIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.872 18.128A8.666 8.666 0 1 1 18.128 5.872"/><path d="M9.879 14.121a3 3 0 1 1 4.243-4.243M12 1.333v2M22.667 12h-2M12 22.667v-2M1.333 12h2m-.666 9.333L21.333 2.667M9.393 20.263a8.667 8.667 0 0 0 10.871-10.87"/></g>
    </svg>
  );
}

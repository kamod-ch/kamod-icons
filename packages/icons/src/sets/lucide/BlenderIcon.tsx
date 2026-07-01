import type { IconProps } from "../../shared/types";

export function BlenderIcon({
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
      <path d="M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14zm9-12-1 12m-7.994 0L7 2m.565 6.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5M12 18h.01"/>
    </svg>
  );
}

import type { IconProps } from "../../../shared/types";

export function HeartCodeIcon({
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
      <path d="m19.5 12.572-.536.53m-7.91 5.96L4.5 12.573A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M20 21l2-2-2-2m-3 0-2 2 2 2"/>
    </svg>
  );
}
